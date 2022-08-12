import React from 'react'
import axios from '../api/admin'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [list,setList]=useState()
  const [id,setId]=useState()
  const [name,setName]=useState('')
  const [cc,setCc]=useState()
  const [company,setCompany]=useState()
  const [kind,setKind]=useState()
  const [price,setPrice]=useState()
  const [imglink,setImgLink]=useState()

  const handleAdd = async(e)=>{
    e.preventDefault();
    await axios.post('/motor/',{name,cc,company,kind,price,imglink})
    .catch((err)=>console.log(err))
    toast.success('Thêm sản phẩm thành công', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    setName('')
    setCc('')
    setCompany('')
    setKind('')
    setPrice('')
    setImgLink('')
  }
  return (
    <>
     <div className="admin-product">
    <div className="top">
    </div>
    <div className="product">
      <div className="view">
        <h1>Sản Phẩm</h1>
        <div className="detail-container">
          <div className="detail">
          </div>
          <div className="detail">
            <p>Tên</p>
            <input type="text" className="input-name"value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="detail">
            <p>Phân Khối</p>
            <input type="text" className="input-cc" value={cc} onChange={(e)=>setCc(e.target.value)} />
          </div>
          <div className="detail">
            <p>Hãng</p>
            <input type="text" className="input-company"value={company}  onChange={(e)=>setCompany(e.target.value)} />
          </div>
          <div className="detail">
            <p>Loại</p>
            <input type="text" className="input-type"value={kind}  onChange={(e)=>setKind(e.target.value)} />
          </div>
          <div className="detail">
            <p>Giá Tiền</p>
            <input type="text" className="input-price"value={price}  onChange={(e)=>setPrice(e.target.value)} />
          </div>
          <div className="detail">
            <p>Ảnh</p>
            <input type="text" className="input-img"value={imglink}  onChange={(e)=>setImgLink(e.target.value)} />
          </div>
          <img src={imglink} className="img-add"/>
          <button className='btn-addproduct' onClick={(e)=>handleAdd(e)}>Xác Nhận</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default AddProduct