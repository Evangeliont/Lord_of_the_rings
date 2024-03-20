import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deleteHistoryItem } from "../../store/slices/historySlice";
import { getEmail } from "../../store/slices/userSlice";
import s from "./markHistory.module.scss";

export interface MarkHistory {
  post: string;
}

export const MarkHistory = ({ post }: MarkHistory) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userEmail = useAppSelector(getEmail);

  const handleSelectPost = () => {
    navigate(`/searchResult/?query=${post}`);
  };

  const handleDeletePost = (post: string, userEmail?: string) => {
    if (userEmail) {
      dispatch(deleteHistoryItem({ search: post, email: userEmail }));
    }
  };

  return (
    <div className={s.markHistory}>
      <li className={s.markHistoryItem}>
        <button className={s.markHistoryButton} onClick={handleSelectPost}>
          <p className={s.markHistorySubtitle}>{post}</p>
        </button>
        <button
          className={s.markHistoryButton}
          onClick={() => handleDeletePost(post, userEmail)}
        >
          Remove
        </button>
      </li>
    </div>
  );
};
