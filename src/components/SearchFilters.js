import React from 'react'
import { Link } from "react-router-dom";


const SearchFilters = () => {
  return (
    <div className='flex gap-3'>
    <Link>
      <svg
        width="30"
        height="30"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.97794 13.5962L8.97443 13.5988L8.96867 13.6032L8.95355 13.6148C8.94189 13.6238 8.92712 13.6354 8.90949 13.6496C8.87423 13.678 8.82741 13.7168 8.77095 13.7662C8.65809 13.8648 8.50614 14.0061 8.33044 14.1911C7.9795 14.5605 7.53029 15.108 7.10944 15.8417C6.26041 17.3219 5.54695 19.5279 5.94799 22.479C6.34362 25.3906 7.56623 27.8251 9.63529 29.5225C11.697 31.2139 14.4889 32.0833 17.8645 32.0833C21.3463 32.0833 24.1244 30.7787 25.9644 28.5394C27.7876 26.3209 28.601 23.2956 28.4064 19.9879C28.2198 16.8149 26.4914 14.4075 24.9648 12.281C24.8174 12.0756 24.6719 11.8729 24.5298 11.6724C22.8644 9.32198 21.5494 7.1554 21.8689 4.12508C21.9015 3.81675 21.8016 3.5091 21.5942 3.27867C21.3867 3.04824 21.0912 2.91666 20.7812 2.91666C20.2241 2.91666 19.5866 3.08906 18.9695 3.34831C18.3334 3.61553 17.6434 4.00678 16.9678 4.51636C15.6193 5.53346 14.271 7.06653 13.5513 9.11689C12.8333 11.1622 13.1971 13.1117 13.723 14.5297C14.0683 15.4608 13.6937 16.3814 13.13 16.6491C12.6314 16.8859 12.0348 16.6873 11.7777 16.1989L10.6004 13.9628C10.4514 13.6799 10.1861 13.4763 9.87428 13.4057C9.56246 13.335 9.2343 13.4051 8.97794 13.5962Z"
          fill="#333333"
        />
      </svg>
    </Link>

    <Link to='/genre'>
      <svg
        width="30"
        height="30"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.91675 8.75001C2.91675 7.13918 4.22258 5.83334 5.83341 5.83334H7.29175V29.1667H5.83341C4.22258 29.1667 2.91675 27.8609 2.91675 26.25V8.75001ZM23.3334 12.3958H17.5001C17.0974 12.3958 16.7709 12.7223 16.7709 13.125V14.5833C16.7709 14.986 17.0974 15.3125 17.5001 15.3125H23.3334C23.7361 15.3125 24.0626 14.986 24.0626 14.5833V13.125C24.0626 12.7223 23.7361 12.3958 23.3334 12.3958ZM9.47925 29.1667H29.1667C30.7776 29.1667 32.0834 27.8609 32.0834 26.25V8.75001C32.0834 7.13918 30.7776 5.83334 29.1667 5.83334H9.47925V29.1667ZM17.5001 10.2083H23.3334C24.9443 10.2083 26.2501 11.5142 26.2501 13.125V14.5833C26.2501 16.1942 24.9443 17.5 23.3334 17.5H17.5001C15.8892 17.5 14.5834 16.1942 14.5834 14.5833V13.125C14.5834 11.5142 15.8892 10.2083 17.5001 10.2083Z"
          fill="#333333"
        />
      </svg>
    </Link>
    <Link>
      <svg
        width="30"
        height="30"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.8915 20.417C27.7027 20.417 29.171 21.8852 29.171 23.6966V25.036C29.171 25.8722 28.9096 26.6874 28.4234 27.3677C26.1691 30.5223 22.4879 32.0852 17.4999 32.0852C12.511 32.0852 8.83165 30.5218 6.58267 27.3653C6.09855 26.6859 5.83838 25.8725 5.83838 25.0381V23.6966C5.83838 21.8852 7.3067 20.417 9.11798 20.417H25.8915ZM17.4999 2.9238C21.527 2.9238 24.7916 6.18839 24.7916 10.2155C24.7916 14.2426 21.527 17.5072 17.4999 17.5072C13.4728 17.5072 10.2082 14.2426 10.2082 10.2155C10.2082 6.18839 13.4728 2.9238 17.4999 2.9238Z"
          fill="#333333"
        />
      </svg>
    </Link>
  </div>
  )
}

export default SearchFilters