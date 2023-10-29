import { useState } from 'react';
import { Table,Button } from 'react-bootstrap';
import EditableField from './EditableField';
import { BiTrash } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemBox = ({items,onAddRow,onEditRow,onDeleteRow})=>{
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>ITEM CODE</th>
                        <th>ITEM DESCRIPTION</th>
                        <th>TAX</th>
                        <th>BATCH</th>
                        <th>EXPIRY</th>
                        <th>QTY+++</th>
                        <th>U.PRICE</th>
                        <th>T.PRICE</th>
                        <th className="text-center">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item,index)=>{
                            return (
                                <tr key={index}>
                                    <td style={{minWidth:'200px'}}>
                                        <EditableField
                                            onUpdate={onEditRow}
                                            cellData={{
                                                type:'text',
                                                name:'code',
                                                placeholder:'Item Code',
                                                value:item.code,
                                                id:item.id
                                            }}
                                        />
                                    </td>
                                    <td style={{width:'100%'}}>
                                        <EditableField
                                            onUpdate={onEditRow}
                                            cellData={{
                                                type:'text',
                                                name:'description',
                                                placeholder:'Description',
                                                value:item.description,
                                                id:item.id
                                            }}
                                        />
                                    </td>
                                    <td style={{minWidth: '70px'}}>
                                        <EditableField
                                            onUpdate={onEditRow}
                                            cellData={{
                                                type:'text',
                                                name:'tax',
                                                placeholder:'A',
                                                value:item.tax,
                                                id:item.id
                                            }}
                                        />
                                    </td>
                                    <td style={{minWidth: '100px'}}>
                                        <EditableField
                                            onUpdate={onEditRow}
                                            cellData={{
                                                type:'text',
                                                name:'batch',
                                                placeholder:'R032',
                                                value:item.batch,
                                                id:item.id
                                            }}
                                        />
                                    </td>
                                    <td style={{minWidth: '150px'}}>
                                        <EditableField
                                            onUpdate={onEditRow}
                                            cellData={{
                                                type:'text',
                                                name:'expiry',
                                                placeholder:'2023-10-30',
                                                value:item.expiry,
                                                id:item.id
                                            }}
                                        />
                                    </td>
                                    <td style={{minWidth: '100px'}}>
                                        <EditableField
                                            onUpdate={onEditRow}
                                            cellData={{
                                                type:'number',
                                                name:'qty',
                                                min: 1,
                                                step: "1",
                                                value: item.qty,
                                                id: item.id,
                                            }}
                                        />
                                    </td>
                                    <td style={{minWidth: '100px'}}>
                                        <EditableField
                                            onUpdate={onEditRow}
                                            cellData={{
                                                type:'number',
                                                name:'u_price',
                                                min: 1,
                                                step: "1",
                                                value: item.u_price,
                                                id: item.id,
                                            }}
                                        />
                                    </td>
                                    <td style={{minWidth: '100px'}}>
                                        <EditableField
                                            onUpdate={onEditRow}
                                            cellData={{
                                                type:'number',
                                                name:'t_price',
                                                min: 1,
                                                step: "1",
                                                value: item.t_price,
                                                id: item.id,
                                            }}
                                        />
                                    </td>
                                    <td className="text-center" style={{minWidth: '50px'}}>
                                        <BiTrash onClick={()=>{onDeleteRow(item.id)}} style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white mt-1 btn btn-danger"/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Button onClick={(onAddRow)}>Add Item</Button>
        </div>
    )
}

export default ItemBox