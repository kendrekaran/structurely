"use client";

import React from "react";

const rowOneChips = [
  {
    label: "Power Auto Dialer",
    color: "#006FFF",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33337 16.2501V3.75008C3.33337 3.19755 3.55287 2.66764 3.94357 2.27694C4.33427 1.88624 4.86417 1.66675 5.41671 1.66675H15.8334C16.0544 1.66675 16.2663 1.75455 16.4226 1.91083C16.5789 2.06711 16.6667 2.27907 16.6667 2.50008V17.5001C16.6667 17.7211 16.5789 17.9331 16.4226 18.0893C16.2663 18.2456 16.0544 18.3334 15.8334 18.3334H5.41671C4.86417 18.3334 4.33427 18.1139 3.94357 17.7232C3.55287 17.3325 3.33337 16.8026 3.33337 16.2501ZM3.33337 16.2501C3.33337 15.6975 3.55287 15.1676 3.94357 14.7769C4.33427 14.3862 4.86417 14.1667 5.41671 14.1667H16.6667" stroke="#006FFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66663 9.16675H13.3333" stroke="#006FFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66663 5.83325H11.6666" stroke="#006FFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Qualifying Conversations",
    color: "#FC2945",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99996 18.3334C14.6023 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6023 1.66675 9.99996 1.66675C5.39759 1.66675 1.66663 5.39771 1.66663 10.0001C1.66663 14.6025 5.39759 18.3334 9.99996 18.3334Z" stroke="#FC2945" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.99996 13.3334C11.8409 13.3334 13.3333 11.841 13.3333 10.0001C13.3333 8.15913 11.8409 6.66675 9.99996 6.66675C8.15901 6.66675 6.66663 8.15913 6.66663 10.0001C6.66663 11.841 8.15901 13.3334 9.99996 13.3334Z" stroke="#FC2945" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 10H10.0083" stroke="#FC2945" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Appointment Setting",
    color: "#5CB05B",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5861 5.41406L5.41406 10.5861" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.5858 13.4146L13.4138 18.5866" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12H18" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.0002 22C13.1048 22 14.0002 21.1046 14.0002 20C14.0002 18.8954 13.1048 18 12.0002 18C10.8957 18 10.0002 18.8954 10.0002 20C10.0002 21.1046 10.8957 22 12.0002 22Z" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.0002 6.00049C13.1048 6.00049 14.0002 5.10506 14.0002 4.00049C14.0002 2.89592 13.1048 2.00049 12.0002 2.00049C10.8957 2.00049 10.0002 2.89592 10.0002 4.00049C10.0002 5.10506 10.8957 6.00049 12.0002 6.00049Z" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 13.9995C21.1046 13.9995 22 13.1041 22 11.9995C22 10.8949 21.1046 9.99951 20 9.99951C18.8954 9.99951 18 10.8949 18 11.9995C18 13.1041 18.8954 13.9995 20 13.9995Z" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.99976 13.9995C5.10433 13.9995 5.99976 13.1041 5.99976 11.9995C5.99976 10.8949 5.10433 9.99951 3.99976 9.99951C2.89519 9.99951 1.99976 10.8949 1.99976 11.9995C1.99976 13.1041 2.89519 13.9995 3.99976 13.9995Z" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Local Phone Numbers",
    color: "#196BCA",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V7.5C2.5 8.42047 3.24619 9.16667 4.16667 9.16667H7.5C8.42047 9.16667 9.16667 8.42047 9.16667 7.5V4.16667C9.16667 3.24619 8.42047 2.5 7.5 2.5Z" stroke="#196BCA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.83337 9.16675V12.5001C5.83337 12.9421 6.00897 13.366 6.32153 13.6786C6.63409 13.9912 7.05801 14.1667 7.50004 14.1667H10.8334" stroke="#196BCA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.8334 10.8333H12.5C11.5796 10.8333 10.8334 11.5794 10.8334 12.4999V15.8333C10.8334 16.7537 11.5796 17.4999 12.5 17.4999H15.8334C16.7538 17.4999 17.5 16.7537 17.5 15.8333V12.4999C17.5 11.5794 16.7538 10.8333 15.8334 10.8333Z" stroke="#196BCA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Qualified Live Transfers",
    color: "#E4981D",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33337 16.2501V3.75008C3.33337 3.19755 3.55287 2.66764 3.94357 2.27694C4.33427 1.88624 4.86417 1.66675 5.41671 1.66675H15.8334C16.0544 1.66675 16.2663 1.75455 16.4226 1.91083C16.5789 2.06711 16.6667 2.27907 16.6667 2.50008V17.5001C16.6667 17.7211 16.5789 17.9331 16.4226 18.0893C16.2663 18.2456 16.0544 18.3334 15.8334 18.3334H5.41671C4.86417 18.3334 4.33427 18.1139 3.94357 17.7232C3.55287 17.3325 3.33337 16.8026 3.33337 16.2501ZM3.33337 16.2501C3.33337 15.6975 3.55287 15.1676 3.94357 14.7769C4.33427 14.3862 4.86417 14.1667 5.41671 14.1667H16.6667" stroke="#E4981D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66663 9.16675H13.3333" stroke="#E4981D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66663 5.83325H11.6666" stroke="#E4981D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Followup Sales Assistant",
    color: "#C834D0",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.82172 4.51172L4.51172 8.82172" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.4885 11.1785L11.1785 15.4885" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 10H15" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.99992 18.3333C10.9204 18.3333 11.6666 17.5871 11.6666 16.6667C11.6666 15.7462 10.9204 15 9.99992 15C9.07944 15 8.33325 15.7462 8.33325 16.6667C8.33325 17.5871 9.07944 18.3333 9.99992 18.3333Z" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.99992 5.00008C10.9204 5.00008 11.6666 4.25389 11.6666 3.33341C11.6666 2.41294 10.9204 1.66675 9.99992 1.66675C9.07944 1.66675 8.33325 2.41294 8.33325 3.33341C8.33325 4.25389 9.07944 5.00008 9.99992 5.00008Z" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6667 11.6666C17.5871 11.6666 18.3333 10.9204 18.3333 9.99992C18.3333 9.07944 17.5871 8.33325 16.6667 8.33325C15.7462 8.33325 15 9.07944 15 9.99992C15 10.9204 15.7462 11.6666 16.6667 11.6666Z" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.33341 11.6666C4.25389 11.6666 5.00008 10.9204 5.00008 9.99992C5.00008 9.07944 4.25389 8.33325 3.33341 8.33325C2.41294 8.33325 1.66675 9.07944 1.66675 9.99992C1.66675 10.9204 2.41294 11.6666 3.33341 11.6666Z" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Task Creation + Notifications",
    color: "#7834BB",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V9.16667C2.5 9.6269 2.8731 10 3.33333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z" stroke="#7834BB" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6667 2.5H12.5001C12.0398 2.5 11.6667 2.8731 11.6667 3.33333V5.83333C11.6667 6.29357 12.0398 6.66667 12.5001 6.66667H16.6667C17.127 6.66667 17.5001 6.29357 17.5001 5.83333V3.33333C17.5001 2.8731 17.127 2.5 16.6667 2.5Z" stroke="#7834BB" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6667 10H12.5001C12.0398 10 11.6667 10.3731 11.6667 10.8333V16.6667C11.6667 17.1269 12.0398 17.5 12.5001 17.5H16.6667C17.127 17.5 17.5001 17.1269 17.5001 16.6667V10.8333C17.5001 10.3731 17.127 10 16.6667 10Z" stroke="#7834BB" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 13.3333H3.33333C2.8731 13.3333 2.5 13.7063 2.5 14.1666V16.6666C2.5 17.1268 2.8731 17.4999 3.33333 17.4999H7.5C7.96024 17.4999 8.33333 17.1268 8.33333 16.6666V14.1666C8.33333 13.7063 7.96024 13.3333 7.5 13.3333Z" stroke="#7834BB" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Local Phone Numbers",
    color: "#196BCA",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V7.5C2.5 8.42047 3.24619 9.16667 4.16667 9.16667H7.5C8.42047 9.16667 9.16667 8.42047 9.16667 7.5V4.16667C9.16667 3.24619 8.42047 2.5 7.5 2.5Z" stroke="#196BCA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.83325 9.16675V12.5001C5.83325 12.9421 6.00885 13.366 6.32141 13.6786C6.63397 13.9912 7.05789 14.1667 7.49992 14.1667H10.8333" stroke="#196BCA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.8333 10.8333H12.4999C11.5794 10.8333 10.8333 11.5794 10.8333 12.4999V15.8333C10.8333 16.7537 11.5794 17.4999 12.4999 17.4999H15.8333C16.7537 17.4999 17.4999 16.7537 17.4999 15.8333V12.4999C17.4999 11.5794 16.7537 10.8333 15.8333 10.8333Z" stroke="#196BCA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Drip Followup Campaigns",
    color: "#FF5E00",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33341 18.3333V5.83333C8.33341 5.61232 8.24562 5.40036 8.08934 5.24408C7.93306 5.0878 7.72109 5 7.50008 5H3.33341C2.89139 5 2.46746 5.17559 2.1549 5.48816C1.84234 5.80072 1.66675 6.22464 1.66675 6.66667V16.6667C1.66675 17.1087 1.84234 17.5326 2.1549 17.8452C2.46746 18.1577 2.89139 18.3333 3.33341 18.3333H13.3334C13.7754 18.3333 14.1994 18.1577 14.5119 17.8452C14.8245 17.5326 15.0001 17.1087 15.0001 16.6667V12.5C15.0001 12.279 14.9123 12.067 14.756 11.9107C14.5997 11.7545 14.3878 11.6667 14.1667 11.6667H1.66675" stroke="#FF5E00" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5001 1.66675H12.5001C12.0398 1.66675 11.6667 2.03984 11.6667 2.50008V7.50008C11.6667 7.96032 12.0398 8.33341 12.5001 8.33341H17.5001C17.9603 8.33341 18.3334 7.96032 18.3334 7.50008V2.50008C18.3334 2.03984 17.9603 1.66675 17.5001 1.66675Z" stroke="#FF5E00" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const rowTwoChips = [
  {
    label: "Qualified Live Transfers",
    color: "#E4981D",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33337 16.2501V3.75008C3.33337 3.19755 3.55287 2.66764 3.94357 2.27694C4.33427 1.88624 4.86417 1.66675 5.41671 1.66675H15.8334C16.0544 1.66675 16.2663 1.75455 16.4226 1.91083C16.5789 2.06711 16.6667 2.27907 16.6667 2.50008V17.5001C16.6667 17.7211 16.5789 17.9331 16.4226 18.0893C16.2663 18.2456 16.0544 18.3334 15.8334 18.3334H5.41671C4.86417 18.3334 4.33427 18.1139 3.94357 17.7232C3.55287 17.3325 3.33337 16.8026 3.33337 16.2501ZM3.33337 16.2501C3.33337 15.6975 3.55287 15.1676 3.94357 14.7769C4.33427 14.3862 4.86417 14.1667 5.41671 14.1667H16.6667" stroke="#E4981D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66663 9.16675H13.3333" stroke="#E4981D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66663 5.83325H11.6666" stroke="#E4981D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Local Phone Numbers",
    color: "#196BCA",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V7.5C2.5 8.42047 3.24619 9.16667 4.16667 9.16667H7.5C8.42047 9.16667 9.16667 8.42047 9.16667 7.5V4.16667C9.16667 3.24619 8.42047 2.5 7.5 2.5Z" stroke="#196BCA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.83337 9.16675V12.5001C5.83337 12.9421 6.00897 13.366 6.32153 13.6786C6.63409 13.9912 7.05801 14.1667 7.50004 14.1667H10.8334" stroke="#196BCA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.8334 10.8333H12.5C11.5796 10.8333 10.8334 11.5794 10.8334 12.4999V15.8333C10.8334 16.7537 11.5796 17.4999 12.5 17.4999H15.8334C16.7538 17.4999 17.5 16.7537 17.5 15.8333V12.4999C17.5 11.5794 16.7538 10.8333 15.8334 10.8333Z" stroke="#196BCA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Power Auto Dialer",
    color: "#006FFF",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33337 16.2501V3.75008C3.33337 3.19755 3.55287 2.66764 3.94357 2.27694C4.33427 1.88624 4.86417 1.66675 5.41671 1.66675H15.8334C16.0544 1.66675 16.2663 1.75455 16.4226 1.91083C16.5789 2.06711 16.6667 2.27907 16.6667 2.50008V17.5001C16.6667 17.7211 16.5789 17.9331 16.4226 18.0893C16.2663 18.2456 16.0544 18.3334 15.8334 18.3334H5.41671C4.86417 18.3334 4.33427 18.1139 3.94357 17.7232C3.55287 17.3325 3.33337 16.8026 3.33337 16.2501ZM3.33337 16.2501C3.33337 15.6975 3.55287 15.1676 3.94357 14.7769C4.33427 14.3862 4.86417 14.1667 5.41671 14.1667H16.6667" stroke="#006FFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66663 9.16675H13.3333" stroke="#006FFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.66663 5.83325H11.6666" stroke="#006FFF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Qualifying Conversations",
    color: "#FC2945",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99996 18.3334C14.6023 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6023 1.66675 9.99996 1.66675C5.39759 1.66675 1.66663 5.39771 1.66663 10.0001C1.66663 14.6025 5.39759 18.3334 9.99996 18.3334Z" stroke="#FC2945" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.99996 13.3334C11.8409 13.3334 13.3333 11.841 13.3333 10.0001C13.3333 8.15913 11.8409 6.66675 9.99996 6.66675C8.15901 6.66675 6.66663 8.15913 6.66663 10.0001C6.66663 11.841 8.15901 13.3334 9.99996 13.3334Z" stroke="#FC2945" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 10H10.0083" stroke="#FC2945" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Appointment Setting",
    color: "#5CB05B",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5861 5.41406L5.41406 10.5861" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.5858 13.4146L13.4138 18.5866" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12H18" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.0002 22C13.1048 22 14.0002 21.1046 14.0002 20C14.0002 18.8954 13.1048 18 12.0002 18C10.8957 18 10.0002 18.8954 10.0002 20C10.0002 21.1046 10.8957 22 12.0002 22Z" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.0002 6.00049C13.1048 6.00049 14.0002 5.10506 14.0002 4.00049C14.0002 2.89592 13.1048 2.00049 12.0002 2.00049C10.8957 2.00049 10.0002 2.89592 10.0002 4.00049C10.0002 5.10506 10.8957 6.00049 12.0002 6.00049Z" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 13.9995C21.1046 13.9995 22 13.1041 22 11.9995C22 10.8949 21.1046 9.99951 20 9.99951C18.8954 9.99951 18 10.8949 18 11.9995C18 13.1041 18.8954 13.9995 20 13.9995Z" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.99976 13.9995C5.10433 13.9995 5.99976 13.1041 5.99976 11.9995C5.99976 10.8949 5.10433 9.99951 3.99976 9.99951C2.89519 9.99951 1.99976 10.8949 1.99976 11.9995C1.99976 13.1041 2.89519 13.9995 3.99976 13.9995Z" stroke="#5CB05B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Drip Followup Campaigns",
    color: "#FF5E00",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33341 18.3333V5.83333C8.33341 5.61232 8.24562 5.40036 8.08934 5.24408C7.93306 5.0878 7.72109 5 7.50008 5H3.33341C2.89139 5 2.46746 5.17559 2.1549 5.48816C1.84234 5.80072 1.66675 6.22464 1.66675 6.66667V16.6667C1.66675 17.1087 1.84234 17.5326 2.1549 17.8452C2.46746 18.1577 2.89139 18.3333 3.33341 18.3333H13.3334C13.7754 18.3333 14.1994 18.1577 14.5119 17.8452C14.8245 17.5326 15.0001 17.1087 15.0001 16.6667V12.5C15.0001 12.279 14.9123 12.067 14.756 11.9107C14.5997 11.7545 14.3878 11.6667 14.1667 11.6667H1.66675" stroke="#FF5E00" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5001 1.66675H12.5001C12.0398 1.66675 11.6667 2.03984 11.6667 2.50008V7.50008C11.6667 7.96032 12.0398 8.33341 12.5001 8.33341H17.5001C17.9603 8.33341 18.3334 7.96032 18.3334 7.50008V2.50008C18.3334 2.03984 17.9603 1.66675 17.5001 1.66675Z" stroke="#FF5E00" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Followup Sales Assistant",
    color: "#C834D0",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.82172 4.51172L4.51172 8.82172" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.4885 11.1785L11.1785 15.4885" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 10H15" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.99992 18.3333C10.9204 18.3333 11.6666 17.5871 11.6666 16.6667C11.6666 15.7462 10.9204 15 9.99992 15C9.07944 15 8.33325 15.7462 8.33325 16.6667C8.33325 17.5871 9.07944 18.3333 9.99992 18.3333Z" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.99992 5.00008C10.9204 5.00008 11.6666 4.25389 11.6666 3.33341C11.6666 2.41294 10.9204 1.66675 9.99992 1.66675C9.07944 1.66675 8.33325 2.41294 8.33325 3.33341C8.33325 4.25389 9.07944 5.00008 9.99992 5.00008Z" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6667 11.6666C17.5871 11.6666 18.3333 10.9204 18.3333 9.99992C18.3333 9.07944 17.5871 8.33325 16.6667 8.33325C15.7462 8.33325 15 9.07944 15 9.99992C15 10.9204 15.7462 11.6666 16.6667 11.6666Z" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.33341 11.6666C4.25389 11.6666 5.00008 10.9204 5.00008 9.99992C5.00008 9.07944 4.25389 8.33325 3.33341 8.33325C2.41294 8.33325 1.66675 9.07944 1.66675 9.99992C1.66675 10.9204 2.41294 11.6666 3.33341 11.6666Z" stroke="#C834D0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Task Creation + Notifications",
    color: "#7834BB",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V9.16667C2.5 9.6269 2.8731 10 3.33333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z" stroke="#7834BB" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6667 2.5H12.5001C12.0398 2.5 11.6667 2.8731 11.6667 3.33333V5.83333C11.6667 6.29357 12.0398 6.66667 12.5001 6.66667H16.6667C17.127 6.66667 17.5001 6.29357 17.5001 5.83333V3.33333C17.5001 2.8731 17.127 2.5 16.6667 2.5Z" stroke="#7834BB" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6667 10H12.5001C12.0398 10 11.6667 10.3731 11.6667 10.8333V16.6667C11.6667 17.1269 12.0398 17.5 12.5001 17.5H16.6667C17.127 17.5 17.5001 17.1269 17.5001 16.6667V10.8333C17.5001 10.3731 17.127 10 16.6667 10Z" stroke="#7834BB" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 13.3333H3.33333C2.8731 13.3333 2.5 13.7063 2.5 14.1666V16.6666C2.5 17.1268 2.8731 17.4999 3.33333 17.4999H7.5C7.96024 17.4999 8.33333 17.1268 8.33333 16.6666V14.1666C8.33333 13.7063 7.96024 13.3333 7.5 13.3333Z" stroke="#7834BB" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

interface FeatureChipProps {
  label: string;
  color: string;
  icon: React.ReactNode;
}

function FeatureChip({ label, color, icon }: FeatureChipProps) {
  return (
    <div
      className="flex shrink-0 items-center gap-2 rounded-xl bg-[#FAFAFA] px-3 py-2"
      style={{
        border: `1px solid ${color}`,
        boxShadow:
          "0 0 0 1px rgba(0,0,0,0.08), 0 1px 1px -0.5px rgba(51,51,51,0.05), 0 3px 3px -1.5px rgba(51,51,51,0.05), 0 6px 6px -3px rgba(51,51,51,0.05), 0 12px 12px -6px rgba(51,51,51,0.05), 0 24px 24px -12px rgba(51,51,51,0.05)",
      }}
    >
      {icon}
      <span className="whitespace-nowrap text-base font-medium leading-6 tracking-[-0.02em] text-[#202020]">
        {label}
      </span>
    </div>
  );
}

interface MarqueeRowProps {
  chips: FeatureChipProps[];
  reverse?: boolean;
}

function MarqueeRow({ chips, reverse = false }: MarqueeRowProps) {
  const doubled = [...chips, ...chips];
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((chip, i) => (
          <FeatureChip key={`${chip.label}-${i}`} {...chip} />
        ))}
      </div>
    </div>
  );
}

function SmartOutreachSection() {
  return (
    <section id="smart-outreach" className="overflow-hidden border-b border-[#E5E7EB]">
      <div className="px-global">
        <div className="max-w-global mx-auto border-x border-[#E5E7EB]">
          <div className="flex flex-col items-center gap-3 px-6 pb-0 pt-16 text-center md:px-24">
            <div className="inline-flex items-center gap-1 rounded-lg bg-white px-4 py-2 text-xs font-medium leading-4 text-[#646464] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_-0.5px_rgba(51,51,51,0.05),0_3px_3px_-1.5px_rgba(51,51,51,0.05),0_6px_6px_-3px_rgba(51,51,51,0.05),0_12px_12px_-6px_rgba(51,51,51,0.05),0_24px_24px_-12px_rgba(51,51,51,0.05)]">
              Smart Outreach
            </div>
            <h2 className="max-w-[11em] text-center">
              Powerful Tools to{" "}
              <span className="text-[#006FFF]">Grow Your</span> Pipeline
            </h2>
          </div>

          <div className="flex flex-col gap-4 pb-16 pt-12">
            <MarqueeRow chips={rowOneChips} />
            <MarqueeRow chips={rowTwoChips} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmartOutreachSection;
