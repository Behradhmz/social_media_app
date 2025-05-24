import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../supabase-client";
import { useAuth } from "../Context/AuthContext";

interface Props {
  postId: number;
}

interface Vote {
  id: number;
  post_id: number;
  user_id: string;
  vote: number;
}

const vote = async (voteValue: number, postId: number, userId: string) => {
  const { data: existingVote } = await supabase
    .from("votes")
    .select("*")
    .eq("post_id", postId)
    .eq("user_id", userId)
    .maybeSingle();

  console.log("Existing vote data:", existingVote);

  if (existingVote) {
    if (existingVote.vote === voteValue) {
      console.log("Deleting vote with ID:", existingVote.id);
      const { error } = await supabase
        .from("votes")
        .delete()
        .eq("id", existingVote.id);

      if (error) throw new Error(error.message);
      console.log("Vote deleted successfully.");
    } else {
      console.log("Updating vote to:", voteValue);
      const { error } = await supabase
        .from("votes")
        .update({ vote: voteValue })
        .eq("id", existingVote.id);

      if (error) throw new Error(error.message);
    }
  } else {
    const { error } = await supabase
      .from("votes")
      .insert({ post_id: postId, user_id: userId, vote: voteValue });
    if (error) throw new Error(error.message);
    console.log("New vote inserted successfully.");
  }
};

const fetchVotes = async (postId: number): Promise<Vote[]> => {
  const { data, error } = await supabase
    .from("votes")
    .select("*")
    .eq("post_id", postId);

  if (error) throw new Error(error.message);
  return data as Vote[];
};

const LikeButton = ({ postId }: Props) => {
  const { user } = useAuth();

  const queryClinet = useQueryClient();

  const {
    data: votes,
    isLoading,
    error,
  } = useQuery<Vote[], Error>({
    queryKey: ["votes", postId],
    queryFn: () => fetchVotes(postId),
    refetchInterval: 2000,
  });

  const { mutate } = useMutation({
    mutationFn: (voteValue: number) => {
      if (!user) throw new Error("You must be Logged in to Vote");
      return vote(voteValue, postId, user!.id);
    },
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["votes", postId] });
    },
  });

  if (isLoading) {
    return <div>Loading votes ...</div>;
  }
  if (error) return <div>Error: {error.message}</div>;

  const likes = Array.isArray(votes)
    ? votes.filter((v) => v.vote === 1).length
    : 0;
  const dislikes = Array.isArray(votes)
    ? votes.filter((v) => v.vote === -1).length
    : 0;

  const userVote = Array.isArray(votes)
    && votes.find((v) => v.user_id === user?.id)?.vote;

  return (
    <div className="flex items-center space-x-4 my-4">
      <button
        className={`px-3 py-1 cursor-pointer rounded transition-colors duration-150 ${
          userVote === 1 ? "bg-green-500 text-white" : "bg-gray-200 text-black"
        }`}
        onClick={() => mutate(1)}
      >
        👍 {likes}
      </button>
      <button
        className={`px-3 py-1 cursor-pointer rounded transition-colors duration-150 ${
          userVote === -1 ? "bg-red-500 text-white" : "bg-gray-200 text-black"
        }`}
        onClick={() => mutate(-1)}
      >
        👎 {dislikes}
      </button>
    </div>
  );
};

export default LikeButton;
