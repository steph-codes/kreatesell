import React,{useState} from 'react'
import {Menu} from 'antd'
import style from './sidebar.module.scss'
import Router,{useRouter}  from 'next/router'
import {Shop, Dashboard, Product, Wallet,Ticket,Setting} from '../IconPack'

const menuItemStyle = {
    display:"flex",
    alignItems:"center",
}


const MenuItem = ({Icon=()=><></>,title,target="#",...rest})=>{

        const {pathname} = useRouter()
        const isPath = target.split("/")[3] == pathname.split("/")[3]

    return(
      
        <Menu.Item
                {...rest}
                style={menuItemStyle}
                icon={<Icon className={style.icon} active={isPath} height={20} width={20}/>}
                title={title}
                className={isPath ? style.active:style.menuitem}
                onClick={()=>Router.push(target)}
                >
                {title}
            </Menu.Item> 

        
    )
}


const Sidebar = ()=>{

    return(
        <>
        <Menu mode="vertical" theme="light"
        className={style.menu} >
            <MenuItem
                key={1}
                Icon={Dashboard}
                title="Dashboard"
                target='/account/kreator/dashboard'/>
            <MenuItem
                key={2}
                Icon={Shop}
                title="Store"
                target="/account/kreator/store"/>
            <MenuItem
                key={3}
                Icon={Product}
                title="Products"
                target="/account/kreator/dashboard"/>
          
          <MenuItem
                key={4}
                Icon={Wallet}
                title="Payouts"
                target="/account/kreator/dashboard"/>
             <MenuItem
                key={5}
                Icon={Ticket}
                title="Integrations"
                target="/account/kreator/dashboard"/>
            <MenuItem
                key={6}
                Icon={Setting}
                title="Settings"
                target="/account/kreator/dashboard"/>
        </Menu>
        </>
    )
}

export default Sidebar