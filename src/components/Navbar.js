import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="flex w-screen h-12 md:h-screen md:px-3 md:w-12 flex-row md:flex-col justify-center gap-7 align-middle bg-black fixed z-10">
      <Link to="/">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5495 2.53189C11.3874 1.82531 12.6126 1.82531 13.4505 2.5319L20.2005 8.224C20.7074 8.65152 21 9.2809 21 9.94406V19.7468C21 20.7133 20.2165 21.4968 19.25 21.4968H15.75C14.7835 21.4968 14 20.7133 14 19.7468V14.2468C14 14.1088 13.8881 13.9968 13.75 13.9968H10.25C10.1119 13.9968 9.99999 14.1088 9.99999 14.2468V19.7468C9.99999 20.7133 9.2165 21.4968 8.25 21.4968H4.75C3.7835 21.4968 3 20.7133 3 19.7468V9.94406C3 9.2809 3.29255 8.65152 3.79952 8.224L10.5495 2.53189ZM12.4835 3.6786C12.2042 3.44307 11.7958 3.44307 11.5165 3.6786L4.76651 9.37071C4.59752 9.51321 4.5 9.72301 4.5 9.94406V19.7468C4.5 19.8849 4.61193 19.9968 4.75 19.9968H8.25C8.38807 19.9968 8.49999 19.8849 8.49999 19.7468V14.2468C8.49999 13.2803 9.2835 12.4968 10.25 12.4968H13.75C14.7165 12.4968 15.5 13.2803 15.5 14.2468V19.7468C15.5 19.8849 15.6119 19.9968 15.75 19.9968H19.25C19.3881 19.9968 19.5 19.8849 19.5 19.7468V9.94406C19.5 9.72301 19.4025 9.51321 19.2335 9.37071L12.4835 3.6786Z"
          fill="#F2F2F2"
        />
      </svg>
      </Link>
      {/* <Link to="/discover">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 2.75C14.0041 2.75 17.25 5.99594 17.25 10C17.25 11.7319 16.6427 13.3219 15.6295 14.5688L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2641 20.7966 19.8474 20.8208 19.5538 20.6029L19.4697 20.5303L14.5688 15.6295C13.3219 16.6427 11.7319 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75ZM10 4.25C6.82436 4.25 4.25 6.82436 4.25 10C4.25 13.1756 6.82436 15.75 10 15.75C13.1756 15.75 15.75 13.1756 15.75 10C15.75 6.82436 13.1756 4.25 10 4.25Z"
          fill="#F2F2F2"
        />
      </svg>
      </Link>
      <Link to="/library">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 3H5C6.05382 3 6.91812 3.8164 6.99451 4.85081L7 5V19C7 20.0538 6.1836 20.9181 5.14919 20.9945L5 21H4C2.94618 21 2.08188 20.1836 2.00549 19.1492L2 19V5C2 3.94618 2.8164 3.08188 3.85081 3.00549L4 3H5H4ZM10 3H11C12.0538 3 12.9181 3.8164 12.9945 4.85081L13 5V19C13 20.0538 12.1836 20.9181 11.1492 20.9945L11 21H10C8.94618 21 8.08188 20.1836 8.00549 19.1492L8 19V5C8 3.94618 8.8164 3.08188 9.85081 3.00549L10 3H11H10ZM16.9743 5.0005C17.8138 5.0005 18.5825 5.5311 18.8643 6.34636L18.9113 6.5025L21.9263 18.2485C22.1888 19.2689 21.613 20.3094 20.6295 20.6402L20.4863 20.6825L19.5173 20.9315C19.3513 20.9735 19.1833 20.9945 19.0193 20.9945C18.1807 20.9945 17.4112 20.463 17.1302 19.6476L17.0833 19.4915L14.0673 7.7465C13.8058 6.72514 14.3807 5.68555 15.3649 5.35484L15.5083 5.3125L16.4763 5.0635C16.6423 5.0205 16.8103 5.0005 16.9743 5.0005ZM5 4.5H4C3.75467 4.5 3.55042 4.67778 3.50806 4.91043L3.5 5V19C3.5 19.2444 3.67699 19.4494 3.91016 19.4919L4 19.5H5C5.24533 19.5 5.44958 19.3222 5.49194 19.0896L5.5 19V5C5.5 4.75556 5.32301 4.55062 5.08984 4.50809L5 4.5ZM11 4.5H10C9.75467 4.5 9.55042 4.67778 9.50806 4.91043L9.5 5V19C9.5 19.2444 9.67699 19.4494 9.91016 19.4919L10 19.5H11C11.2453 19.5 11.4496 19.3222 11.4919 19.0896L11.5 19V5C11.5 4.75556 11.323 4.55062 11.0898 4.50809L11 4.5ZM16.9753 6.5005L16.9119 6.50437L16.8493 6.5165L15.8813 6.7645C15.7063 6.8095 15.6143 6.9275 15.5743 6.9955C15.5431 7.0483 15.4985 7.14718 15.5049 7.27422L15.5203 7.3745L18.5363 19.1185C18.6023 19.3765 18.8333 19.4945 19.0193 19.4945L19.0818 19.4906L19.1443 19.4785L20.1133 19.2295C20.3515 19.1691 20.5052 18.9458 20.4879 18.7102L20.4733 18.6215L17.4583 6.8755C17.3913 6.6185 17.1613 6.5005 16.9753 6.5005Z"
          fill="#F2F2F2"
        />
      </svg>
      </Link> */}
      
    </nav>
  );
};

export default Navbar;
