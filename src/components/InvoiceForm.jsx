import { useState } from 'react';
import { Row,Col,Button,Form,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import InvoiceHeader from './InvoiceHeader';
import ItemBox  from './ItemBox';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'


const InvoiceForm = ()=>{
    const [hInfo,setHInfo] = useState({
        tin:110094728,
        tel:250785372994,
        email:'usopharmaltd@gmail.com',
        location:"Nyarugenge Market"
    })
    const [items,setItems] = useState([{
        id:1,
        code:'1.RW2BXLU0084',
        description:'NUCLO CPM FORTE B/30',
        tax:'A',
        batch:'R032',
        expiry:'2026-04-06',
        qty:500,
        u_price:680,
        t_price:3400
    }])

    const handleAddItem = ()=>{
        setItems([
            ...items,
            {
                id:(+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
                code:'',
                description:'',
                tax:'',
                batch:'',
                expiry:'',
                qty:0,
                u_price:0,
                t_price:0
            }
        ])
    }
    const handleEditItem = (evt)=>{
        let edititem = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        setItems(items.map((item)=>{
            for(let key in item){
                if(key == edititem.name && item.id == edititem.id){
                    item[key] = edititem.value
                }
            }
            return item
        }))
        
    }
    const handleDeleteItem = (id)=>{
        setItems([
            ...items.filter((item)=>item.id != id)
        ])
    }
    const onGenerate = (e) => {
        //*
        html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
            const imgData = canvas.toDataURL('image/png', 1.0);
            const pdf = new jsPDF({
              orientation: 'portrait',
              unit: 'pt',
            });
            pdf.internal.scaleFactor = 1;
            const imgProps= pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('invoice-001.pdf');
        });
        
        //*

    }
    return (
        <>
        
        <Row>
            <Col md={12}>
                <Card className="mt-5 p-4">
                    <InvoiceHeader info={hInfo} onChange={setHInfo}/>
                    <ItemBox items={items} onAddRow={handleAddItem} onEditRow={handleEditItem} onDeleteRow={handleDeleteItem}/>
                    {/* <Row className='mt-3'>
                        <Col md={4}>
                            <p className='h5'>SDC INFORMATION</p>
                            <hr/>
                            <p className='h6'>SDC Date:19-05-2023</p>
                            <p className='h6'>SDC id:SDC01400061</p>
                            <p className='h6'>Receipt Number:954/979</p>
                        </Col>
                        <Col md={4}>
                            <p className='h5'>BANK ACCOUNTS</p>
                            <hr/>
                            <p className='h6'>MOMOPY:19-05-2023</p>
                            <p className='h6'>I & M BANK:SDC01400061</p>
                            <p className='h6'>COGEBANK:954/979</p>
                        </Col>
                        <Col md={4}>
                            <p className='h5'>RRA NOTICE</p>
                            <hr/>
                            <p className='h6'>Iyi nyemezabuguzi</p>
                            <p className='h6'>This inovice is approved by RRA</p>
                        </Col>
                    </Row> */}
                    <Row className='mt-3'>
                        <Col md={12}>
                            <span className='h4'>Preview</span>
                            <div id="invoiceCapture">
                                <div className='p-invoice'>
                                    <div className='d-flex invoice-header'>
                                        <div className='d-flex'>
                                            <img src='/rra.png'/>
                                            <div className=''>
                                                <p className='p-invoice-font-size-1'>USOPHARMA LTD</p>
                                                <p className='p-invoice-font-size-2'>Tin:{hInfo.tin}</p>
                                                <p className='p-invoice-font-size-2'>Tel:+{hInfo.tel}</p>
                                                <p className='p-invoice-font-size-2'>Email:{hInfo.email}</p>
                                                <p className='p-invoice-font-size-2'>Location:{hInfo.location}</p>
                                            </div>
                                        </div>
                                        <img src='/cross.png'/>
                                    </div>
                                    <div className="client-info">
                                        <div className='sideDiv invoice-client-info'>
                                            <p>
                                                NO CLIENT INFO
                                            </p>
                                        </div>
                                        <img src='/mark.png'/>
                                        <div className='sideDiv'>
                                            <p className='t_right p-invoice-font-size-1'>
                                            NORMAL SALE RECEIPT
                                            </p>
                                            <p className='t_right p-invoice-font-size-1'>
                                            N:979
                                            </p>
                                            <p className='t_right p-invoice-font-size-1'>
                                            On:19-05-2023 09:52:10 AM
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='p-invoice-font-size-1'>Served By:SANTUS</p>
                                        <p className='p-invoice-font-size-1'>Mean Of Payment CASH</p>
                                    </div>
                                    <div className='p-table item-table'>
                                        <div className='p-table-header'>
                                            <div className='p-table-row'>
                                                <div className='p-table-row-code p-table-cell p-invoice-font-size-1' >ITEM CODE</div>
                                                <div className='p-table-row-desc p-table-cell p-invoice-font-size-1' >ITEM DESCRIPTION</div>
                                                <div className='p-table-row-tax p-table-cell p-invoice-font-size-1'>TAX</div>
                                                <div className='p-table-row-batch p-table-cell p-invoice-font-size-1'>BATCH</div>
                                                <div className='p-table-row-expry p-table-cell p-invoice-font-size-1'>EXPIRY</div>
                                                <div className='p-table-row-qty p-table-cell p-invoice-font-size-1'>QTY</div>
                                                <div className='p-table-row-uprice p-table-cell p-invoice-font-size-1'>U.PRICE</div>
                                                <div className='p-table-row-tprice p-table-cell p-invoice-font-size-1'>T.PRICE</div>
                                            </div>
                                        </div>
                                        <div className='p-table-body'>
                                            {items.map((item,index)=>{
                                                return (
                                                <div className='p-table-row' key={index}>
                                                    <div className='p-table-row-code p-table-cell p-invoice-font-size-2'>{item.code}</div>
                                                    <div className='p-table-row-desc p-table-cell p-invoice-font-size-2'>{item.description}</div>
                                                    <div className='p-table-row-tax p-table-cell p-invoice-font-size-2'>{item.tax}</div>
                                                    <div className='p-table-row-batch p-table-cell p-invoice-font-size-2'>{item.batch}</div>
                                                    <div className='p-table-row-expry p-table-cell p-invoice-font-size-2'>{item.expiry}</div>
                                                    <div className='p-table-row-qty p-table-cell p-invoice-font-size-2'>{item.qty}</div>
                                                    <div className='p-table-row-uprice p-table-cell p-invoice-font-size-2'>{item.u_price}</div>
                                                    <div className='p-table-row-tprice p-table-cell p-invoice-font-size-2'>{item.t_price}</div>
                                                </div>
                                                )
                                            })}
                                            
                                        </div>
                                    </div>
                                    <div className='p-table'>
                                        <div className='p-table-header'>
                                                <div className='p-table-row'>
                                                    <div className='p-table-cell p-invoice-font-size-1' style={{width:"15%"}}>Total A-EX Amt</div>
                                                    <div className='p-table-cell p-invoice-font-size-1' style={{width:"15%"}}>Total B-18% Amt</div>
                                                    <div className='p-table-cell p-invoice-font-size-1' style={{width:"15%"}}>Total C-0% Amt</div>
                                                    <div className='p-table-cell p-invoice-font-size-1' style={{width:"15%"}}>Total D-0% Amt</div>
                                                    <div className='p-table-cell p-invoice-font-size-1' style={{width:"15%"}}>Total Tax Amt</div>
                                                    <div className='p-table-cell p-invoice-font-size-1' style={{width:"25%"}}>Total Amount</div>
                                                </div>
                                                <div className='p-table-row'>
                                                    <div className='p-table-cell p-invoice-font-size-1' style={{width:"15%"}}>3,400,000.00</div>
                                                    <div className='p-table-cell p-invoice-font-size-1' style={{width:"15%"}}>0.00</div>
                                                    <div className='p-table-cell p-invoice-font-size-1' style={{width:"15%"}}>0.00</div>
                                                    <div className='p-table-cell p-invoice-font-size-1' style={{width:"15%"}}>0.00</div>
                                                    <div className='p-table-cell p-invoice-font-size-1' style={{width:"15%"}}>0.00</div>
                                                    <div className='p-table-cell p-invoice-font-size-1' style={{width:"25%"}}>3,400,000.00</div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className='p-invoice-font-size-3' style={{fontWeight:'bold'}}>
                                        <p>ITEMS NUMBER: 1</p>
                                        <div className='d-flex justify-content-between' style={{width:"100%", gap:"5px"}}>
                                            <div className='bottom-info-item'>

                                                <p className='dash-style'>SDC INFORMATION</p>
                                                <p>
                                                    SDC Date:19-05-2023 09:52:10<br/>
                                                    SDC id:SDC014000061<br/>
                                                    Receipt Number:954/979NS<br/>
                                                    Internal Data:DN2D-QRWZ-HC4I-EEZN-AYVA-21PP-JI<br/>
                                                </p>
                                                <p className='dash-style'>Receipt Signature:BQQ2-NZFM-2TY7-IGWM</p>
                                                <p>
                                                    Receipt Number:979<br/>
                                                    Date:19-05-2023 09:52:10<br/>
                                                    MRC:WIS00058047<br/>
                                                    Melo<sup>TM</sup>Software V1
                                                </p>
                                            </div>
                                            <div className='bottom-info-item'>
                                                <p className='dash-style'>BANK ACCOUNTS</p>
                                                <p>
                                                    MOMOPAY:071498<br/>
                                                    I&M BANK:20048562001<br/>
                                                    FRW<br/>
                                                    COGEBANK:00012-01390239287-39 FRW<br/>
                                                    GT BANK: <br/>
                                                    222/239607/4/5114/0 EUR

                                                </p>
                                            </div>
                                            <div className='bottom-info-item'>
                                                <p className='dash-style'>RRA NOTICE</p>
                                                <p style={{textAlign:"right"}}>
                                                    Iyi nyemezabuguzi yemewena RRA,<br/>
                                                    n'ubwoitari iya TVA<br/>
                                                    <br/>
                                                    THIS invoice is approved by RRA.<br/>
                                                    through is not for VAT.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='mt-2 p-invoice-font-size-3' style={{textAlign:"center"}}>We care more about our client, Please check your batch, expirations and quantities</p>
                                    <p className='mt-2 print-text p-invoice-font-size-2'>PRINTED BY Melo<sup>TM</sup>Software V1 ©</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Button className='mt-3' onClick={onGenerate}>Generate PDF</Button>
                </Card>
            </Col>
        </Row>
        
        </>
    )
}
export default InvoiceForm