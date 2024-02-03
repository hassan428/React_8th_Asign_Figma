import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from '../pages/Layout'
import { SideBarPages } from '../pages/SideBarPages'
import { sidebarDataArr } from '../utils/Sidebar_data'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />}>
      {sidebarDataArr.map((obj, i) => {
        const { text, link, cancel, deliver, icon, order, revenue } = obj;
        return <Route path={link} key={i} element={
          <SideBarPages
            pageText={text}
            order={order}
            deliver={deliver}
            cancel={cancel}
            revenue={revenue}
             />} />
      })}

    </Route>
  )
)


export const Router_app = () => {
  return (
    <RouterProvider router={router} />
  )
}
