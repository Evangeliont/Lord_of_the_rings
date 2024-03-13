import s from "./preloader.module.scss";
import loaderImg from "../../assets/images/loader.png";

export const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img className={s.preloaderImg} src={loaderImg} alt="loader" />
    </div>
  );
};
