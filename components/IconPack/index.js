import React from "react";
import {components} from 'react-select'
import style from './icon.module.scss'

export const Shop = ({ primaryColor,className,active }) => {
	return (
		
		
		<div className={style.iconwrapper+' '+className} style={{backgroundColor: active ? '#0072EF':''}}>
			<svg
				width="18"
				height="19"
				viewBox="0 0 18 19"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.598982"
					d="M17.8927 4.15064L15.6427 0.367012C15.5072 0.139342 15.2632 0 15 0H3C2.73677 0 2.49282 0.139342 2.35726 0.367012L0.107259 4.15064C0.0371268 4.26832 4.70335e-06 4.40304 4.70335e-06 4.54035C-0.00289371 6.20825 1.33418 7.56308 2.98725 7.56725H2.99325C3.73406 7.56916 4.44902 7.29264 4.99875 6.79161C6.13423 7.82706 7.86227 7.82706 8.99774 6.79161C10.1338 7.82934 11.8644 7.82934 13.0005 6.79161C13.88 7.59215 15.1445 7.79428 16.2262 7.30721C17.3078 6.82014 18.0032 5.73546 18 4.54035C18 4.40304 17.9629 4.26832 17.8927 4.15064Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
				<path
					d="M15.012 8.69084C14.3148 8.69143 13.627 8.50677 13.0027 8.15137L12.9915 8.15738C11.9271 8.76524 10.6949 8.8611 9.56849 8.42368C9.37341 8.34855 9.18297 8.25844 8.99849 8.15394L8.99024 8.15824C7.92619 8.76652 6.69393 8.86209 5.56799 8.42368C5.37316 8.34855 5.18297 8.25844 4.99874 8.15394C4.37556 8.50837 3.68903 8.69217 2.99325 8.69084C2.74408 8.68811 2.49552 8.66226 2.25 8.61352V17.2811C2.25 17.7555 2.58579 18.1401 3 18.1401H7.49999V12.986H10.5V18.1401H15C15.4142 18.1401 15.75 17.7555 15.75 17.2811V8.61009C15.5063 8.66008 15.2595 8.68708 15.012 8.69084Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
			</svg>
		</div>
	);
};

export const Dashboard = ({ primaryColor,width="20", height="20",className,active }) => {
	return (
		<div className={style.iconwrapper+' '+className} style={{backgroundColor: active ? '#0072EF':''}}>
			<svg 
				width={width}
				height={height}
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.4"
					d="M13.3947 1.66699H16.2164C17.3849 1.66699 18.3318 2.62187 18.3318 3.80029V6.64576C18.3318 7.82419 17.3849 8.77907 16.2164 8.77907H13.3947C12.2262 8.77907 11.2793 7.82419 11.2793 6.64576V3.80029C11.2793 2.62187 12.2262 1.66699 13.3947 1.66699Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M3.78145 1.66699H6.60309C7.77165 1.66699 8.71853 2.62187 8.71853 3.80029V6.64576C8.71853 7.82419 7.77165 8.77907 6.60309 8.77907H3.78145C2.6129 8.77907 1.66602 7.82419 1.66602 6.64576V3.80029C1.66602 2.62187 2.6129 1.66699 3.78145 1.66699ZM3.78145 11.2216H6.60309C7.77165 11.2216 8.71853 12.1765 8.71853 13.3549V16.2003C8.71853 17.378 7.77165 18.3336 6.60309 18.3336H3.78145C2.6129 18.3336 1.66602 17.378 1.66602 16.2003V13.3549C1.66602 12.1765 2.6129 11.2216 3.78145 11.2216ZM16.2172 11.2216H13.3956C12.227 11.2216 11.2801 12.1765 11.2801 13.3549V16.2003C11.2801 17.378 12.227 18.3336 13.3956 18.3336H16.2172C17.3858 18.3336 18.3327 17.378 18.3327 16.2003V13.3549C18.3327 12.1765 17.3858 11.2216 16.2172 11.2216Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
			</svg>
		</div>
	);
};

export const Product = ({ primaryColor,className,active }) => {
	return (
		<div className={style.iconwrapper+' '+className}style={{backgroundColor: active ? '#0072EF':''}}>
			<svg
				width="20"
				height="19"
				viewBox="0 0 20 19"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.4"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4.41797 16.8728C4.41797 16.1028 5.0413 15.4795 5.8113 15.4795C6.57214 15.4795 7.19547 16.1028 7.19547 16.8728C7.19547 17.6337 6.57214 18.257 5.8113 18.257C5.0413 18.257 4.41797 17.6337 4.41797 16.8728ZM14.7305 16.8728C14.7305 16.1028 15.3538 15.4795 16.1238 15.4795C16.8846 15.4795 17.508 16.1028 17.508 16.8728C17.508 17.6337 16.8846 18.257 16.1238 18.257C15.3538 18.257 14.7305 17.6337 14.7305 16.8728Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17.5088 3.81957C18.068 3.81957 18.4347 4.01207 18.8013 4.43374C19.168 4.8554 19.2322 5.4604 19.1497 6.00949L18.2788 12.0228C18.1138 13.1787 17.1238 14.0303 15.9597 14.0303H5.95883C4.73966 14.0303 3.73133 13.0953 3.6305 11.8862L2.78716 1.89365L1.403 1.65532C1.03633 1.59115 0.779665 1.23365 0.843831 0.866985C0.907998 0.491152 1.2655 0.243652 1.64133 0.298652L3.82758 0.628652C4.13925 0.684569 4.36841 0.940319 4.39591 1.25199L4.57008 3.30532C4.59758 3.59957 4.83592 3.81957 5.12925 3.81957H17.5088ZM11.9538 8.58532H14.493C14.878 8.58532 15.1805 8.27365 15.1805 7.89782C15.1805 7.51282 14.878 7.21032 14.493 7.21032H11.9538C11.5688 7.21032 11.2663 7.51282 11.2663 7.89782C11.2663 8.27365 11.5688 8.58532 11.9538 8.58532Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
			</svg>
		</div>
	);
};

export const Chart = ({ primaryColor,active }) => {
	return (
		<div className={style.iconwrapper} style={{backgroundColor: active ? '#0072EF':''}}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5 9.2H8V19H5V9.2ZM10.6 5H13.4V19H10.6V5ZM16.2 13H19V19H16.2V13Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
			</svg>
		</div>
	);
};

export const Wallet = ({ primaryColor,className,active }) => {
	return (
		<div className={style.iconwrapper+' '+className} style={{backgroundColor: active ? '#0072EF':''}}>
			<svg
				width="18"
				height="16"
				viewBox="0 0 18 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17.3297 4.97927H13.8008C12.1586 4.98216 10.8282 6.27929 10.8253 7.88047C10.8231 9.48527 12.1549 10.7882 13.8008 10.7903H17.3327V11.0453C17.3327 13.8446 15.6356 15.5 12.7638 15.5H5.23565C2.36305 15.5 0.666016 13.8446 0.666016 11.0453V4.94822C0.666016 2.14885 2.36305 0.5 5.23565 0.5H12.7608C15.6327 0.5 17.3297 2.14885 17.3297 4.94822V4.97927ZM4.61568 4.97275H9.31568H9.31865H9.32457C9.67642 4.97131 9.96087 4.69181 9.95939 4.34803C9.9579 4.00497 9.6705 3.72763 9.31865 3.72908H4.61568C4.26605 3.73052 3.98235 4.00713 3.98087 4.34875C3.97939 4.69181 4.26383 4.97131 4.61568 4.97275Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
				<path
					opacity="0.4"
					d="M12.3632 8.24722C12.5375 9.03987 13.2324 9.59756 14.0259 9.58306H16.7341C17.0642 9.58306 17.332 9.30965 17.332 8.97171V6.86208C17.3313 6.52485 17.0642 6.25073 16.7341 6.25H13.9621C13.0596 6.2529 12.3306 7.00204 12.332 7.92523C12.332 8.03329 12.3427 8.14134 12.3632 8.24722Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
				<ellipse
					cx="13.9993"
					cy="7.91634"
					rx="0.833334"
					ry="0.833333"
					fill="#3A416F"
				/>
			</svg>
		</div>
	);
};

export const AddUser = ({ primaryColor,active }) => {
	return (
		<>
			<svg
				width="18"
				height="16"
				viewBox="0 0 18 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.4"
					d="M16.5829 5.98989H15.5803V5.00968C15.5803 4.59121 15.2447 4.25 14.8312 4.25C14.4185 4.25 14.082 4.59121 14.082 5.00968V5.98989H13.0812C12.6676 5.98989 12.332 6.33109 12.332 6.74957C12.332 7.16804 12.6676 7.50925 13.0812 7.50925H14.082V8.49032C14.082 8.90879 14.4185 9.25 14.8312 9.25C15.2447 9.25 15.5803 8.90879 15.5803 8.49032V7.50925H16.5829C16.9956 7.50925 17.332 7.16804 17.332 6.74957C17.332 6.33109 16.9956 5.98989 16.5829 5.98989Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
				<path
					d="M6.91602 10.5127C3.54454 10.5127 0.666016 11.0517 0.666016 13.2053C0.666016 15.358 3.52702 15.9164 6.91602 15.9164C10.2867 15.9164 13.166 15.3774 13.166 13.2239C13.166 11.0703 10.305 10.5127 6.91602 10.5127Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
				<path
					opacity="0.4"
					d="M6.91678 8.46152C9.21225 8.46152 11.0523 6.59775 11.0523 4.27269C11.0523 1.94762 9.21225 0.0830078 6.91678 0.0830078C4.6213 0.0830078 2.78125 1.94762 2.78125 4.27269C2.78125 6.59775 4.6213 8.46152 6.91678 8.46152Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
			</svg>
		</>
	);
};

export const Dollar = ({ primaryColor,active }) => {
	return (
		<>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M11.8003 10.9C9.53031 10.31 8.80031 9.7 8.80031 8.75C8.80031 7.66 9.81031 6.9 11.5003 6.9C13.2803 6.9 13.9403 7.75 14.0003 9H16.2103C16.1403 7.28 15.0903 5.7 13.0003 5.19V3H10.0003V5.16C8.06031 5.58 6.50031 6.84 6.50031 8.77C6.50031 11.08 8.41031 12.23 11.2003 12.9C13.7003 13.5 14.2003 14.38 14.2003 15.31C14.2003 16 13.7103 17.1 11.5003 17.1C9.44031 17.1 8.63031 16.18 8.52031 15H6.32031C6.44031 17.19 8.08031 18.42 10.0003 18.83V21H13.0003V18.85C14.9503 18.48 16.5003 17.35 16.5003 15.3C16.5003 12.46 14.0703 11.49 11.8003 10.9Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
			</svg>
		</>
	);
};

export const Ticket = ({ primaryColor,className,active}) => {
	return (
		<div className={style.iconwrapper+' '+className} style={{backgroundColor: active ? '#0072EF':''}}>
			<svg
				width="20"
				height="16"
				viewBox="0 0 20 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.4"
					d="M11.7505 5.70254V3.6827C11.354 3.6827 11.0251 3.36328 11.0251 2.9781V0.573073C11.0251 0.252716 10.764 0 10.4352 0H3.7911C1.70213 0 0 1.65252 0 3.6827V6.11497C0 6.3038 0.0773694 6.4823 0.212766 6.61382C0.348162 6.74441 0.531915 6.81956 0.725339 6.81956C1.46035 6.81956 2.02128 7.32687 2.02128 7.99389C2.02128 8.69004 1.45068 9.24432 0.73501 9.25277C0.338491 9.25277 0 9.52522 0 9.91979V12.3258C0 14.355 1.70213 15.9991 3.78143 15.9991H10.4352C10.764 15.9991 11.0251 15.7445 11.0251 15.426V13.3958C11.0251 13.0022 11.354 12.6912 11.7505 12.6912V10.8696C11.354 10.8696 11.0251 10.5492 11.0251 10.165V6.40714C11.0251 6.02196 11.354 5.70254 11.7505 5.70254Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
				<path
					d="M17.9782 7.99483C17.9782 8.69004 18.5585 9.24432 19.2645 9.25371C19.661 9.25371 19.9995 9.52616 19.9995 9.91134V12.3258C19.9995 14.3559 18.3071 16 16.2181 16H13.0653C12.7461 16 12.4753 15.7454 12.4753 15.426V13.3967C12.4753 13.0022 12.1562 12.6921 11.75 12.6921V10.8705C12.1562 10.8705 12.4753 10.5502 12.4753 10.1659V6.40808C12.4753 6.02196 12.1562 5.70348 11.75 5.70348V3.6827C12.1562 3.6827 12.4753 3.36328 12.4753 2.9781V0.574012C12.4753 0.253655 12.7461 0 13.0653 0H16.2181C18.3071 0 19.9995 1.64406 19.9995 3.6733V6.04075C19.9995 6.22864 19.9221 6.40808 19.7868 6.53866C19.6514 6.67019 19.4676 6.74535 19.2742 6.74535C18.5585 6.74535 17.9782 7.30996 17.9782 7.99483Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
			</svg>
		</div>
	);
};

export const Setting = ({ primaryColor,className,active }) => {
	return (
		<div className={style.iconwrapper+' '+className} style={{backgroundColor: active ? '#0072EF':''}}>
			<svg
				width="15"
				height="15"
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.596982"
					d="M7 6.23154L4.3259 3.49439L5.15986 2.64076L2.57993 0L0 2.64076L2.57993 5.28152L3.41389 4.4279L5.92675 7L7 6.23154Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
				<path
					opacity="0.596982"
					d="M11.6433 9C11.4384 9.02147 11.2308 9.03579 11.0199 9.03579C10.8176 9.03579 10.6166 9.02505 10.415 9.00418L8 11.6875L10.9967 14.3822C11.9126 15.2059 13.397 15.2059 14.313 14.3822C15.229 13.5586 15.229 12.2237 14.313 11.4001L11.6433 9Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
				<path
					d="M12.6694 4.23187L10.7681 2.33063L12.7731 0.325625C12.3075 0.118125 11.7931 0 11.25 0C9.17877 0 7.50002 1.67875 7.50002 3.75C7.50002 4.12125 7.55565 4.47875 7.65627 4.8175L0.913165 10.2738C0.356291 10.7656 0.0237924 11.4731 0.00129243 12.215C-0.0218325 12.9575 0.266292 13.6844 0.79129 14.2087C1.30129 14.7194 1.97941 15 2.70066 15C3.47503 15 4.21378 14.6675 4.72628 14.0869L10.1825 7.34375C10.5213 7.44438 10.8788 7.5 11.25 7.5C13.3213 7.5 15 5.82125 15 3.75C15 3.20688 14.8819 2.6925 14.6744 2.22625L12.6694 4.23187Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
			</svg>
		</div>
	);
};

export const Card = ({ primaryColor,active }) => {
	return (
		<div className={style.iconwrapper} style={{backgroundColor: active ? '#0072EF':''}}>
			<svg
				width="16"
				height="14"
				viewBox="0 0 16 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.593634"
					d="M16 3.55556V1.18538C16 0.530459 15.4033 0 14.6667 0H1.33333C0.596667 0 0 0.530459 0 1.18538V3.55556H16Z"
					fill={primaryColor || "#130F26"}
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 6.22266V12.0408C0 12.7552 0.596667 13.3338 1.33333 13.3338H14.6667C15.4033 13.3338 16 12.7552 16 12.0408V6.22266H0ZM7.33333 10.1014H2.66667V8.80851H7.33333V10.1014ZM10.6667 10.1014H13.3333V8.80851H10.6667V10.1014Z"
					fill={active ? '#ffffff':"#3A416F"}
				/>
			</svg>
		</div>
	);
};

export const Dash = () => {
	return (
		<>
			<svg
				width="25"
				height="34"
				viewBox="0 0 25 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M5.71484 13V11H19.7148V13H5.71484Z" fill="#3A416F" />
			</svg>
		</>
	);
};

export const Logout = () => {
	return (
		<>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.4"
					d="M0.833984 4.90942C0.833984 2.66267 2.69504 0.833008 4.98147 0.833008H9.52916C11.8109 0.833008 13.6673 2.65717 13.6673 4.90026V15.0899C13.6673 17.3376 11.8063 19.1663 9.5189 19.1663H4.97308C2.69037 19.1663 0.833984 17.3422 0.833984 15.0991V14.2374V4.90942Z"
					fill="#3A416F"
				/>
				<path
					d="M18.9651 9.49956L16.3565 6.83297C16.0868 6.55797 15.653 6.55797 15.3842 6.83481C15.1164 7.11164 15.1173 7.55806 15.386 7.83306L16.8153 9.29331H15.4449H7.75383C7.37441 9.29331 7.06641 9.60956 7.06641 9.99914C7.06641 10.3896 7.37441 10.705 7.75383 10.705H16.8153L15.386 12.1652C15.1173 12.4402 15.1164 12.8866 15.3842 13.1635C15.519 13.3019 15.6949 13.3716 15.8717 13.3716C16.0467 13.3716 16.2225 13.3019 16.3565 13.1653L18.9651 10.4996C19.0945 10.3667 19.1678 10.1871 19.1678 9.99914C19.1678 9.81214 19.0945 9.63247 18.9651 9.49956Z"
					fill="#3A416F"
				/>
			</svg>
		</>
	);
};

export const Diamond = () => {
	return (
		<>
			<svg
				width="42"
				height="42"
				viewBox="0 0 42 42"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_dd)">
					<rect x="5" y="1" width="32" height="32" rx="6" fill="white" />
				</g>
				<path
					d="M18 10C17.4477 10 17 10.4477 17 11C17 11.5523 17.4477 12 18 12H24C24.5523 12 25 11.5523 25 11C25 10.4477 24.5523 10 24 10H18Z"
					fill="white"
				/>
				<path
					d="M15 14C15 13.4477 15.4477 13 16 13H26C26.5523 13 27 13.4477 27 14C27 14.5523 26.5523 15 26 15H16C15.4477 15 15 14.5523 15 14Z"
					fill="white"
				/>
				<path
					d="M13 18C13 16.8954 13.8954 16 15 16H27C28.1046 16 29 16.8954 29 18V22C29 23.1046 28.1046 24 27 24H15C13.8954 24 13 23.1046 13 22V18Z"
					fill="white"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M25.25 10C25.4356 10 25.6112 10.0825 25.73 10.225L28.855 13.975C29.0393 14.1956 29.0487 14.5125 28.8793 14.7444L22.0043 24.1194C21.8862 24.28 21.6987 24.375 21.4999 24.375C21.3012 24.375 21.1137 24.28 20.9956 24.1194L14.1205 14.7444C13.9512 14.5131 13.9612 14.1956 14.1449 13.975L17.2699 10.225C17.3887 10.0825 17.5643 10 17.7499 10H25.25ZM17.1249 15H25.875V13.75H17.1249V15Z"
					fill="#67748E"
				/>
				<defs>
					<filter
						id="filter0_dd"
						x="0"
						y="0"
						width="42"
						height="42"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						/>
						<feMorphology
							radius="1"
							operator="erode"
							in="SourceAlpha"
							result="effect1_dropShadow"
						/>
						<feOffset dy="2" />
						<feGaussianBlur stdDeviation="2" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow"
						/>
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						/>
						<feMorphology
							radius="1"
							operator="erode"
							in="SourceAlpha"
							result="effect2_dropShadow"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="3" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
						/>
						<feBlend
							mode="normal"
							in2="effect1_dropShadow"
							result="effect2_dropShadow"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect2_dropShadow"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		</>
	);
};

export const PageDot = () => {
	return (
		<>
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="15.8012"
					cy="15.8013"
					r="15.5"
					transform="rotate(-1.1244 15.8012 15.8013)"
					fill="#FBFBFB"
				/>
				<ellipse
					cx="15.8016"
					cy="15.846"
					rx="1.13415"
					ry="1.17906"
					transform="rotate(-1.1244 15.8016 15.846)"
					fill="#0072EF"
				/>
				<ellipse
					cx="15.6825"
					cy="9.79818"
					rx="1.13415"
					ry="1.17906"
					transform="rotate(-1.1244 15.6825 9.79818)"
					fill="#0072EF"
				/>
				<ellipse
					cx="15.9188"
					cy="21.804"
					rx="1.13415"
					ry="1.17906"
					transform="rotate(-1.1244 15.9188 21.804)"
					fill="#0072EF"
				/>
			</svg>
		</>
	);
};

export const Cog = () => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.2338 1.75641C13.6653 -0.585469 10.3347 -0.585469 9.76617 1.75641C9.39891 3.26923 7.66567 3.98716 6.33624 3.17713C4.27827 1.92318 1.92318 4.27827 3.17713 6.33624C3.98716 7.66567 3.26923 9.39889 1.75641 9.76617C-0.585469 10.3347 -0.585469 13.6653 1.75641 14.2338C3.26923 14.6011 3.98716 16.3344 3.17713 17.6637C1.92318 19.7217 4.27827 22.0769 6.33625 20.8228C7.66567 20.0128 9.39891 20.7307 9.76617 22.2436C10.3347 24.5854 13.6653 24.5854 14.2338 22.2436C14.6011 20.7307 16.3344 20.0128 17.6637 20.8228C19.7217 22.0769 22.0769 19.7217 20.8228 17.6637C20.0128 16.3344 20.7307 14.6011 22.2436 14.2338C24.5854 13.6653 24.5854 10.3347 22.2436 9.76617C20.7307 9.39889 20.0128 7.66567 20.8228 6.33624C22.0769 4.27827 19.7217 1.92318 17.6637 3.17713C16.3344 3.98716 14.6011 3.26923 14.2338 1.75641ZM12 16.5C14.4854 16.5 16.5 14.4854 16.5 12C16.5 9.51473 14.4854 7.5 12 7.5C9.51473 7.5 7.5 9.51473 7.5 12C7.5 14.4854 9.51473 16.5 12 16.5Z"
				fill="#BFBFBF"
			/>
		</svg>
	);
};

export const Bell = () => {
	return (
		<svg
			width="19"
			height="23"
			viewBox="0 0 19 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.47369 0.90918C4.98901 0.90918 1.35343 4.54476 1.35343 9.02949V13.8825L0.396434 14.8394C0.00936597 15.2265 -0.106416 15.8086 0.103061 16.3143C0.312538 16.8201 0.806036 17.1498 1.35343 17.1498H17.594C18.1414 17.1498 18.6349 16.8201 18.8444 16.3143C19.0539 15.8086 18.938 15.2265 18.551 14.8394L17.594 13.8825V9.02949C17.594 4.54476 13.9584 0.90918 9.47369 0.90918Z"
				fill="#BFBFBF"
			/>
			<path
				d="M9.47226 22.5641C7.22991 22.5641 5.41211 20.7463 5.41211 18.5039H13.5324C13.5324 20.7463 11.7147 22.5641 9.47226 22.5641Z"
				fill="#BFBFBF"
			/>
		</svg>
	);
};

export const DropdownIndicator = (props) => {
	return (
		<components.DropdownIndicator {...props}>
			<svg
				width="11"
				height="16"
				viewBox="0 0 11 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0.5 10.5L5.5 15.5L10.5 10.5H0.5Z" fill="#595959" />
				<path d="M0.5 5.5L5.5 0.5L10.5 5.5H0.5Z" fill="#595959" />
			</svg>
		</components.DropdownIndicator>
	);
};

export const ProfileInputIcon = () => {
	return (
		<>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 12C13.65 12 15 10.65 15 9C15 7.35 13.65 6 12 6C10.35 6 9 7.35 9 9C9 10.65 10.35 12 12 12ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM18 16.58C18 14.08 14.03 13 12 13C9.97 13 6 14.08 6 16.58V18H18V16.58ZM8.48 16C9.22 15.49 10.71 15 12 15C13.29 15 14.78 15.49 15.52 16H8.48ZM19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
					fill="white"
				/>
			</svg>
		</>
	);
};

export const UploaderIcon = () => {
	return (
		<>
			<svg
				width="94"
				height="99"
				viewBox="0 0 94 99"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M85.0547 19.7266H8.94485C7.32569 19.7266 6.01755 21.0347 6.01755 22.6539V81.1999C6.01755 82.819 7.32569 84.1272 8.94485 84.1272H85.0547C86.6738 84.1272 87.982 82.819 87.982 81.1999V22.6539C87.982 21.0347 86.6738 19.7266 85.0547 19.7266ZM31.0826 32.8994C34.3117 32.8994 36.9372 35.5248 36.9372 38.754C36.9372 41.9832 34.3117 44.6086 31.0826 44.6086C27.8534 44.6086 25.228 41.9832 25.228 38.754C25.228 35.5248 27.8534 32.8994 31.0826 32.8994ZM78.0932 72.8845C77.9599 72.9965 77.7915 73.058 77.6175 73.0583H16.3729C15.9704 73.0583 15.6411 72.729 15.6411 72.3265C15.6411 72.1527 15.7051 71.988 15.8149 71.8508L31.3936 53.3722C31.6497 53.0612 32.1163 53.0246 32.4273 53.2808C32.4547 53.3082 32.4913 53.3356 32.5188 53.3722L41.6117 64.1667L56.0744 47.0145C56.3305 46.7035 56.7971 46.6669 57.1081 46.923C57.1355 46.9505 57.1721 46.9779 57.1996 47.0145L78.203 71.86C78.4408 72.1618 78.4042 72.6284 78.0932 72.8845Z"
					fill="#595959"
				/>
				<rect
					x="10.854"
					y="9.67188"
					width="72.8007"
					height="7.63644"
					rx="3.81822"
					fill="#595959"
				/>
				<rect
					x="16.4538"
					width="61.6006"
					height="7.63644"
					rx="3.81822"
					fill="#595959"
				/>
			</svg>
		</>
	);
};

export const EditIcon = () => {
	return (
		<svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity="0.4"
				d="M16.6643 22.8178H7.33488C5.88835 22.9077 4.46781 22.4062 3.3989 21.4293C2.4219 20.3594 1.92041 18.9388 2.01032 17.4933V8.16295C1.92041 6.71744 2.4209 5.29691 3.3979 4.22701C4.46781 3.25002 5.88835 2.74854 7.33488 2.83844H16.6643C18.1089 2.74854 19.5284 3.24902 20.5973 4.22601C21.5733 5.29691 22.0758 6.71644 21.9899 8.16295V17.4933C22.0788 18.9388 21.5783 20.3594 20.6013 21.4293C19.5314 22.4062 18.1109 22.9077 16.6643 22.8178Z"
				fill="#262626"
			/>
			<path
				d="M17.0545 11.2257L10.5018 17.8111C10.161 18.1428 9.7131 18.3281 9.24574 18.3281H6.95762C6.83105 18.3281 6.71421 18.2793 6.62658 18.1915C6.53895 18.1037 6.5 17.9867 6.5 17.8598L6.55842 15.5476C6.56816 15.0891 6.75315 14.6598 7.07446 14.3379L11.7189 9.68422C11.7967 9.60617 11.9331 9.60617 12.011 9.68422L13.6399 11.3067C13.747 11.413 13.9028 11.4823 14.0683 11.4823C14.4286 11.4823 14.7109 11.1896 14.7109 10.8384C14.7109 10.6628 14.6428 10.5067 14.5357 10.3896C14.5065 10.3506 12.9554 8.80617 12.9554 8.80617C12.858 8.70861 12.858 8.54276 12.9554 8.4452L13.6078 7.78178C14.2114 7.17691 15.1851 7.17691 15.7888 7.78178L17.0545 9.05008C17.6485 9.6452 17.6485 10.6208 17.0545 11.2257Z"
				fill="#262626"
			/>
		</svg>
	);
};

export const ShareIcon = () => {
	return (
		<svg
			width="20"
			height="21"
			viewBox="0 0 20 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect y="0.828125" width="20" height="20" rx="5" fill="#A4A5A6" />
			<path
				d="M13.2812 12.9062C12.8916 12.9062 12.532 13.043 12.2504 13.2713L9.41758 11.2219C9.46501 10.9615 9.46501 10.6947 9.41758 10.4344L12.2504 8.38496C12.532 8.61328 12.8916 8.75 13.2812 8.75C14.1863 8.75 14.9219 8.01445 14.9219 7.10938C14.9219 6.2043 14.1863 5.46875 13.2812 5.46875C12.3762 5.46875 11.6406 6.2043 11.6406 7.10938C11.6406 7.26797 11.6625 7.41973 11.7049 7.56465L9.01426 9.51289C8.61504 8.98379 7.98066 8.64062 7.26562 8.64062C6.05703 8.64062 5.07812 9.61953 5.07812 10.8281C5.07812 12.0367 6.05703 13.0156 7.26562 13.0156C7.98066 13.0156 8.61504 12.6725 9.01426 12.1434L11.7049 14.0916C11.6625 14.2365 11.6406 14.3896 11.6406 14.5469C11.6406 15.452 12.3762 16.1875 13.2812 16.1875C14.1863 16.1875 14.9219 15.452 14.9219 14.5469C14.9219 13.6418 14.1863 12.9062 13.2812 12.9062ZM13.2812 6.39844C13.6736 6.39844 13.9922 6.71699 13.9922 7.10938C13.9922 7.50176 13.6736 7.82031 13.2812 7.82031C12.8889 7.82031 12.5703 7.50176 12.5703 7.10938C12.5703 6.71699 12.8889 6.39844 13.2812 6.39844ZM7.26562 12.0312C6.60254 12.0312 6.0625 11.4912 6.0625 10.8281C6.0625 10.165 6.60254 9.625 7.26562 9.625C7.92871 9.625 8.46875 10.165 8.46875 10.8281C8.46875 11.4912 7.92871 12.0312 7.26562 12.0312ZM13.2812 15.2578C12.8889 15.2578 12.5703 14.9393 12.5703 14.5469C12.5703 14.1545 12.8889 13.8359 13.2812 13.8359C13.6736 13.8359 13.9922 14.1545 13.9922 14.5469C13.9922 14.9393 13.6736 15.2578 13.2812 15.2578Z"
				fill="#262626"
			/>
		</svg>
	);
};


export const CheckMark = () => {
	return (
		<>
			<svg
				width="11"
				height="9"
				viewBox="0 0 11 9"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1.91308 4.03516H1.91326C1.99256 4.03525 2.07081 4.05331 2.14213 4.08798C2.21341 4.12262 2.27591 4.17295 2.32497 4.2352L1.91308 4.03516ZM1.91308 4.03516H1.09394C0.890308 4.03516 0.776602 4.26975 0.902321 4.4292L0.902371 4.42927L4.11214 8.49567L4.11218 8.49573C4.32247 8.76188 4.72568 8.76114 4.93667 8.49617L4.93708 8.49566L10.6597 1.24398C10.6598 1.24378 10.66 1.24358 10.6602 1.24338C10.7884 1.08295 10.6699 0.85 10.4689 0.85H9.6498C9.48941 0.85 9.33668 0.9235 9.2376 1.05044C9.23751 1.05055 9.23742 1.05066 9.23734 1.05077L4.52403 7.02157M1.91308 4.03516L4.52403 7.02157M4.52403 7.02157L2.32506 4.23531L4.52403 7.02157Z"
					fill="white"
					stroke="white"
					strokeWidth="0.3"
				/>
			</svg>
		</>
	);
};


export const ViewAs = ()=>{

	return(
		<>
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="20" height="20" rx="5" fill="#A4A5A6"/>
			<path d="M16.722 9.59688C15.2407 6.47656 13.0017 4.90625 10.0001 4.90625C6.99697 4.90625 4.75947 6.47656 3.27822 9.59844C3.2188 9.72425 3.18799 9.86165 3.18799 10.0008C3.18799 10.1399 3.2188 10.2773 3.27822 10.4031C4.75947 13.5234 6.99853 15.0938 10.0001 15.0938C13.0032 15.0938 15.2407 13.5234 16.722 10.4016C16.8423 10.1484 16.8423 9.85469 16.722 9.59688ZM10.0001 13.9688C7.47978 13.9688 5.63447 12.6906 4.3329 10C5.63447 7.30938 7.47978 6.03125 10.0001 6.03125C12.5204 6.03125 14.3657 7.30938 15.6673 10C14.3673 12.6906 12.522 13.9688 10.0001 13.9688ZM9.93759 7.25C8.41884 7.25 7.18759 8.48125 7.18759 10C7.18759 11.5188 8.41884 12.75 9.93759 12.75C11.4563 12.75 12.6876 11.5188 12.6876 10C12.6876 8.48125 11.4563 7.25 9.93759 7.25ZM9.93759 11.75C8.9704 11.75 8.18759 10.9672 8.18759 10C8.18759 9.03281 8.9704 8.25 9.93759 8.25C10.9048 8.25 11.6876 9.03281 11.6876 10C11.6876 10.9672 10.9048 11.75 9.93759 11.75Z" fill="#262626"/>
		</svg>

		</>
	)
}

export const FilterIcon = ()=>{

	return(
		<>
		<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.4999 7.5C12.4999 8.95869 13.0793 10.3576 14.1108 11.3891C15.1422 12.4205 16.5412 13 17.9999 13C19.4586 13 20.8575 12.4205 21.889 11.3891C22.9204 10.3576 23.4999 8.95869 23.4999 7.5C23.4999 6.04131 22.9204 4.64236 21.889 3.61091C20.8575 2.57946 19.4586 2 17.9999 2C16.5412 2 15.1422 2.57946 14.1108 3.61091C13.0793 4.64236 12.4999 6.04131 12.4999 7.5ZM20.9999 4C21.1325 4 21.2597 4.05268 21.3534 4.14645C21.4472 4.24021 21.4999 4.36739 21.4999 4.5V6.5C21.4999 6.63261 21.4472 6.75979 21.3534 6.85355C21.2597 6.94732 21.1325 7 20.9999 7H18.9999C18.8673 7 18.7401 6.94732 18.6463 6.85355C18.5525 6.75979 18.4999 6.63261 18.4999 6.5C18.4999 6.36739 18.5525 6.24021 18.6463 6.14645C18.7401 6.05268 18.8673 6 18.9999 6H19.9999C19.7672 5.68928 19.4653 5.4371 19.1181 5.26351C18.7709 5.08992 18.388 4.99969 17.9999 5C17.1669 5 16.4279 5.407 15.9729 6.036C15.8939 6.14012 15.7774 6.2092 15.6481 6.22845C15.5189 6.2477 15.3872 6.2156 15.2814 6.13901C15.1755 6.06242 15.1038 5.94743 15.0817 5.81866C15.0595 5.68988 15.0887 5.55756 15.1629 5.45C15.4871 5.00083 15.9133 4.63513 16.4066 4.38303C16.8998 4.13093 17.4459 3.99965 17.9999 4C18.9799 4 19.8649 4.403 20.4999 5.05V4.5C20.4999 4.36739 20.5525 4.24021 20.6463 4.14645C20.7401 4.05268 20.8673 4 20.9999 4ZM15.4999 9.95V10.5C15.4999 10.6326 15.4472 10.7598 15.3534 10.8536C15.2597 10.9473 15.1325 11 14.9999 11C14.8673 11 14.7401 10.9473 14.6463 10.8536C14.5525 10.7598 14.4999 10.6326 14.4999 10.5V8.5C14.4999 8.36739 14.5525 8.24021 14.6463 8.14645C14.7401 8.05268 14.8673 8 14.9999 8H16.9999C17.1325 8 17.2597 8.05268 17.3534 8.14645C17.4472 8.24021 17.4999 8.36739 17.4999 8.5C17.4999 8.63261 17.4472 8.75979 17.3534 8.85355C17.2597 8.94732 17.1325 9 16.9999 9H15.9999C16.4559 9.608 17.1829 10 17.9999 10C18.7659 10 19.4519 9.656 19.9109 9.112C19.9528 9.06058 20.0046 9.01803 20.0632 8.98683C20.1217 8.95563 20.1859 8.9364 20.252 8.93026C20.3181 8.92412 20.3847 8.9312 20.4481 8.95109C20.5114 8.97097 20.5701 9.00325 20.6208 9.04607C20.6715 9.08888 20.7132 9.14135 20.7434 9.20044C20.7736 9.25952 20.7918 9.32403 20.7968 9.3902C20.8018 9.45638 20.7937 9.52289 20.7727 9.58586C20.7518 9.64884 20.7185 9.70701 20.6749 9.757C20.3466 10.1468 19.9371 10.46 19.475 10.6747C19.0129 10.8894 18.5094 11.0005 17.9999 11C17.5342 11.0006 17.0731 10.908 16.6437 10.7277C16.2144 10.5474 15.8254 10.283 15.4999 9.95ZM8.49987 13H14.5339C13.7248 12.4887 13.038 11.806 12.5219 11H8.49987L8.38287 11.007C8.12977 11.0371 7.89772 11.1627 7.73413 11.3582C7.57054 11.5536 7.48776 11.8042 7.5027 12.0586C7.51763 12.313 7.62916 12.5522 7.8145 12.7272C7.99984 12.9021 8.24499 12.9997 8.49987 13ZM5.49987 6H11.6739C11.5193 6.65468 11.4671 7.32933 11.5189 8H5.49987C5.24499 7.99972 4.99984 7.90212 4.8145 7.72715C4.62916 7.55218 4.51763 7.31305 4.5027 7.05861C4.48776 6.80416 4.57054 6.55362 4.73413 6.35817C4.89772 6.16271 5.12977 6.0371 5.38287 6.007L5.49987 6ZM10.3829 16.007L10.4999 16H14.4999C14.7547 16.0003 14.9999 16.0979 15.1852 16.2728C15.3706 16.4478 15.4821 16.687 15.497 16.9414C15.512 17.1958 15.4292 17.4464 15.2656 17.6418C15.102 17.8373 14.87 17.9629 14.6169 17.993L14.4999 18H10.4999C10.245 17.9997 9.99984 17.9021 9.8145 17.7272C9.62916 17.5522 9.51763 17.313 9.5027 17.0586C9.48776 16.8042 9.57054 16.5536 9.73413 16.3582C9.89772 16.1627 10.1298 16.0371 10.3829 16.007Z" fill="white"/>
		</svg>

		</>
	)
}

export const Twitter = ()=>{
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
<path d="M21.2031 0.953125H1.79688C1.33018 0.953125 0.953125 1.33018 0.953125 1.79688V21.2031C0.953125 21.6698 1.33018 22.0469 1.79688 22.0469H21.2031C21.6698 22.0469 22.0469 21.6698 22.0469 21.2031V1.79688C22.0469 1.33018 21.6698 0.953125 21.2031 0.953125ZM17.1769 8.5917C17.1848 8.71563 17.1848 8.84482 17.1848 8.97139C17.1848 12.8421 14.2369 17.3008 8.8501 17.3008C7.18896 17.3008 5.64912 16.8183 4.35186 15.9877C4.58916 16.0141 4.81592 16.0246 5.0585 16.0246C6.42959 16.0246 7.68994 15.5605 8.69453 14.7748C7.40781 14.7484 6.32676 13.9047 5.95762 12.7445C6.4085 12.8104 6.81455 12.8104 7.27861 12.6918C6.61608 12.5572 6.02057 12.1974 5.59327 11.6735C5.16596 11.1495 4.93322 10.4938 4.93457 9.81777V9.78086C5.32217 9.99971 5.77832 10.1342 6.25557 10.1526C5.85437 9.88526 5.52535 9.52302 5.29768 9.09803C5.07 8.67304 4.95072 8.19844 4.95039 7.71631C4.95039 7.17051 5.09277 6.67217 5.34854 6.23975C6.08392 7.14503 7.00157 7.88543 8.04185 8.41284C9.08213 8.94025 10.2217 9.24285 11.3866 9.30098C10.9727 7.31025 12.4598 5.69922 14.2475 5.69922C15.0912 5.69922 15.8506 6.05254 16.3858 6.62207C17.0477 6.49814 17.6805 6.25029 18.2447 5.91807C18.0259 6.5957 17.5671 7.16787 16.958 7.5291C17.5486 7.46582 18.1182 7.30234 18.6455 7.07295C18.2474 7.6583 17.749 8.17773 17.1769 8.5917Z" fill="#262626"/>
</svg>
	)
}

export const Facebook = ()=>{
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
<path d="M21.2031 0.953125H1.79688C1.33018 0.953125 0.953125 1.33018 0.953125 1.79688V21.2031C0.953125 21.6698 1.33018 22.0469 1.79688 22.0469H21.2031C21.6698 22.0469 22.0469 21.6698 22.0469 21.2031V1.79688C22.0469 1.33018 21.6698 0.953125 21.2031 0.953125ZM18.7668 7.10986H17.0819C15.7609 7.10986 15.5052 7.7374 15.5052 8.66025V10.6932H18.6587L18.2474 13.8757H15.5052V22.0469H12.2172V13.8783H9.46709V10.6932H12.2172V8.34648C12.2172 5.62275 13.881 4.13828 16.312 4.13828C17.4774 4.13828 18.4768 4.22529 18.7694 4.26484V7.10986H18.7668Z" fill="#262626"/>
</svg>
	)
}

export const Instagram = ()=>{
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
<path d="M11.498 7.98594C9.5627 7.98594 7.9833 9.56534 7.9833 11.5007C7.9833 13.436 9.5627 15.0154 11.498 15.0154C13.4334 15.0154 15.0128 13.436 15.0128 11.5007C15.0128 9.56534 13.4334 7.98594 11.498 7.98594ZM22.0397 11.5007C22.0397 10.0452 22.0528 8.60293 21.9711 7.1501C21.8894 5.4626 21.5044 3.96494 20.2704 2.73096C19.0338 1.49434 17.5388 1.11201 15.8513 1.03028C14.3958 0.948538 12.9535 0.961722 11.5007 0.961722C10.0452 0.961722 8.60293 0.948538 7.1501 1.03028C5.4626 1.11201 3.96494 1.49698 2.73096 2.73096C1.49434 3.96758 1.11201 5.4626 1.03028 7.1501C0.948538 8.60557 0.961722 10.0479 0.961722 11.5007C0.961722 12.9535 0.948538 14.3984 1.03028 15.8513C1.11201 17.5388 1.49698 19.0364 2.73096 20.2704C3.96758 21.507 5.4626 21.8894 7.1501 21.9711C8.60557 22.0528 10.0479 22.0397 11.5007 22.0397C12.9562 22.0397 14.3984 22.0528 15.8513 21.9711C17.5388 21.8894 19.0364 21.5044 20.2704 20.2704C21.507 19.0338 21.8894 17.5388 21.9711 15.8513C22.0555 14.3984 22.0397 12.9562 22.0397 11.5007ZM11.498 16.9086C8.50537 16.9086 6.09014 14.4934 6.09014 11.5007C6.09014 8.50801 8.50537 6.09278 11.498 6.09278C14.4907 6.09278 16.906 8.50801 16.906 11.5007C16.906 14.4934 14.4907 16.9086 11.498 16.9086ZM17.1274 7.13428C16.4287 7.13428 15.8645 6.57002 15.8645 5.87129C15.8645 5.17256 16.4287 4.6083 17.1274 4.6083C17.8262 4.6083 18.3904 5.17256 18.3904 5.87129C18.3906 6.03721 18.3581 6.20154 18.2947 6.35486C18.2313 6.50819 18.1383 6.6475 18.021 6.76482C17.9037 6.88214 17.7643 6.97517 17.611 7.03857C17.4577 7.10196 17.2934 7.13449 17.1274 7.13428Z" fill="#262626"/>
</svg>
	)
}

export const LinkedIn = ()=>{
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
<path d="M21.2031 0.953125H1.79688C1.33018 0.953125 0.953125 1.33018 0.953125 1.79688V21.2031C0.953125 21.6698 1.33018 22.0469 1.79688 22.0469H21.2031C21.6698 22.0469 22.0469 21.6698 22.0469 21.2031V1.79688C22.0469 1.33018 21.6698 0.953125 21.2031 0.953125ZM7.21006 18.9276H4.08027V8.86064H7.21006V18.9276ZM5.64648 7.48428C5.2877 7.48428 4.93697 7.37788 4.63865 7.17855C4.34032 6.97922 4.10781 6.6959 3.97051 6.36443C3.83321 6.03295 3.79728 5.6682 3.86728 5.31631C3.93727 4.96442 4.11005 4.64118 4.36375 4.38748C4.61745 4.13378 4.94068 3.961 5.29258 3.89101C5.64447 3.82101 6.00922 3.85694 6.3407 3.99424C6.67217 4.13154 6.95549 4.36405 7.15482 4.66238C7.35415 4.9607 7.46055 5.31143 7.46055 5.67021C7.45791 6.67217 6.6458 7.48428 5.64648 7.48428ZM18.9276 18.9276H15.8005V14.0312C15.8005 12.8632 15.7794 11.3629 14.1736 11.3629C12.5468 11.3629 12.2963 12.6338 12.2963 13.9469V18.9276H9.17178V8.86064H12.1724V10.237H12.2146C12.6312 9.446 13.6516 8.61016 15.1756 8.61016C18.3449 8.61016 18.9276 10.6958 18.9276 13.4063V18.9276Z" fill="#262626"/>
</svg>
	)
}

export const Copy = ()=>{
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
<path d="M14.5 0H2.5C1.4 0 0.5 0.9 0.5 2V16H2.5V2H14.5V0ZM17.5 4H6.5C5.4 4 4.5 4.9 4.5 6V20C4.5 21.1 5.4 22 6.5 22H17.5C18.6 22 19.5 21.1 19.5 20V6C19.5 4.9 18.6 4 17.5 4ZM17.5 20H6.5V6H17.5V20Z" fill="#323232"/>
</svg>
	)
}

export const ProfileIcon = ()=>{
	return(
		<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M12.5874 15.3457C8.71979 15.3457 5.41693 15.9305 5.41693 18.2724C5.41693 20.6143 8.69884 21.22 12.5874 21.22C16.455 21.22 19.7569 20.6343 19.7569 18.2933C19.7569 15.9524 16.476 15.3457 12.5874 15.3457Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M12.5874 12.0059C15.1255 12.0059 17.1827 9.94779 17.1827 7.40969C17.1827 4.8716 15.1255 2.81445 12.5874 2.81445C10.0493 2.81445 7.99124 4.8716 7.99124 7.40969C7.98267 9.93922 10.0265 11.9973 12.555 12.0059H12.5874Z" stroke="#130F26" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>

	)
}