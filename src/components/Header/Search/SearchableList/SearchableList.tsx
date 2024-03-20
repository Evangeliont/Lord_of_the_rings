import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetCharacterSearchQuery } from "../../../../store/api/dataOneApi";
import s from "./searchableList.module.scss";
import { useDebounce } from "../../../../hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getEmail } from "../../../../store/slices/userSlice";
import { addHistoryItem } from "../../../../store/slices/historySlice";

export const SearchableList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getEmail);
  const queryParam = new URLSearchParams(location.search).get("query");
  const queryParamValue: string = queryParam ?? "";
  const [value, setValue] = useState<string>(queryParamValue);
  const debouncedSearchTerm = useDebounce(value, 300);
  const debouncedSearchTermValue: string = debouncedSearchTerm ?? "";
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetCharacterSearchQuery(
    debouncedSearchTermValue || queryParamValue,
    {
      skip: value.trim().length <= 0,
    }
  );

  const characterName = data && data.docs ? data.docs : [];
  const searchPopupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setValue((prevValue) => {
      return queryParamValue ?? prevValue;
    });
  }, [queryParamValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchPopupRef.current &&
        !searchPopupRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.trim()) return;
    dispatch(addHistoryItem({ search: value, email: userEmail }));
    setIsOpen(false);
    navigate(`/searchResult/?query=${value}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setIsOpen(true);
  };

  const handleClick = (id: string, name: string) => {
    setValue(name);
    navigate(`/card/${id}`);
    setIsOpen(false);
  };

  return (
    <>
      <form className={s.searchableList} onSubmit={handleSubmit}>
        <label className={s.searchableListWrapper}>
          <button className={s.searchableListLabel} type="submit">
            search
          </button>
          <input
            className={s.searchableListInput}
            type="text"
            placeholder="enter name"
            value={value || ""}
            onChange={handleChange}
            onFocus={() => setIsOpen(true)}
          />
        </label>
      </form>
      <div
        ref={searchPopupRef}
        className={`${s.searchListPopup} ${
          isOpen ? s.searchListPopupOpen : ""
        }`}
      >
        {characterName.length > 0 && isOpen && (
          <ul className={s.searchListChar}>
            {characterName.map((item) => (
              <li
                className={s.searchListItem}
                key={item.id}
                onClick={() => handleClick(item.id, item.name)}
              >
                <p className={s.searchListTitle}>{item.name}</p>
              </li>
            ))}
          </ul>
        )}
        {!characterName.length && debouncedSearchTerm && (
          <p className={s.searchListTitle}>Nothing was found</p>
        )}
      </div>
    </>
  );
};
