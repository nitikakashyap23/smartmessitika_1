import { BrowserRouter, Route, Routes } from "react-router-dom"
import { About } from "./pages/About"
import { BlogDetails } from "./pages/BlogDetails"
import { BlogHome } from "./pages/BlogHome"
import { Contactus } from "./pages/Contactus"
import { Elements } from "./pages/Elements"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Footer } from "./user/layout/Footer"
import Header from "./user/layout/Header"
import { PageHeader } from "./user/layout/PageHeader"
import { Master } from "./user/layout/Master"
import { Login } from "./user/components/Login"
import { AdminMaster } from "./admin/layout/AdminMaster"
import { Dasboard } from "./admin/layout/Dasboard"
import { AddCategory } from "./admin/components/category/AddCategory"
import { ManageCategory } from "./admin/components/category/ManageCategory"
import { UpdateCategory } from "./admin/components/category/UpdateCategory"
import { AddMenuItem } from "./admin/components/menu/AddMenuItem"
import { ManageMenuItems } from "./admin/components/menu/ManageMenuItem"
import { UpdateMenuItem } from "./admin/components/menu/UpdateMenuItem"
import { Register } from "./user/components/Register"
import { ViewCategory } from "./user/components/ViewCategory"
import { ViewMenuItem } from "./user/components/ViewMenuItem"
import { Cart } from "./user/components/Cart"
import { ViewOrders } from "./user/components/ViewOrder"
import { OrderDetails } from "./user/components/OrderDetail"
import { AdminOrderView } from "./admin/components/Order/AdminOrderView"
import { AdminOrderDetails } from "./admin/components/Order/AdminOrderDetails"
import { ToastContainer } from "react-toastify"
import { AdminFeedbackView } from "./admin/components/Feedback/AdminFedbackView"
import { AddOffer } from "./admin/components/Offer/AddOffer"
import { ManageOffer } from "./admin/components/Offer/ManageOffer"
import { UpdateOffer } from "./admin/components/Offer/UpdateOffer"
import { Offers } from "./user/components/Offers"





function App() {

  return (
    <>
      {/* <Header/> */}
      {/* <PageHeader/> */}
      {/* <About/> */}
      {/* <Home/> */}
      {/* <Menu/> */}
      {/* <Elements/> */}
      {/* <Contactus/> */}
      {/* <BlogHome/> */}
      {/* <BlogDetails/> */}
      {/* <Footer/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Contactus" element={<Contactus/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/viewcategory" element={<ViewCategory />}/>
            <Route path="viewmenuitem/:id" element={<ViewMenuItem  />}/>
            <Route path="cart" element={<Cart  />}/>
            <Route path="viewOrder" element={< ViewOrders />}/>
            <Route path="orderDetails/:id" element={< OrderDetails />}/>
            <Route path="offers" element={<Offers />}/>
          </Route>
          
          <Route path="/admin" element={<AdminMaster/>}>
            <Route index element={<Dasboard/>}/>
            <Route path="addcategory" element={< AddCategory/>}/>
            <Route path="managecategory" element={< ManageCategory/>}/>
            <Route path="UpdateCategory/:id" element={< UpdateCategory/>}/>

            <Route path="addmenuitem" element={< AddMenuItem/>}/>
            <Route path="managemenuitem" element={< ManageMenuItems />}/>
            <Route path="updateMenuItem/:id" element={< UpdateMenuItem />}/>

            <Route path="AdminOrderView" element={< AdminOrderView />}/>
            <Route path="AdminOrderDetails/:id" element={< AdminOrderDetails />}/>

            

            <Route path="Feedback" element={<AdminFeedbackView />} />
            <Route path="AddOffer" element={<AddOffer />} />
            <Route path="ManageOffer" element={<ManageOffer />} />
            <Route path="UpdateOffer/:id" element={<UpdateOffer />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />

    </>
  )
}

export default App
