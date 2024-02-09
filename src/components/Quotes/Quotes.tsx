import s from "./quotes.module.scss";

interface Quote {
  dialog: string;
}

export const Quotes = ({ dialog }: Quote) => {
  return (
    <li>
      <div className={s.quote}>
        <span>{dialog}</span>
      </div>
    </li>
  );
};
