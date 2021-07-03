import React, { useState, useEffect } from "react";
import { useSubheader } from "../../../_metronic/layout";
import { Container, Row, Col, Table, Form, Button, Popover, OverlayTrigger, ButtonToolbar, ListGroup, Modal } from 'react-bootstrap'
import {
    TextField,
    Popper,
    Paper,
    MenuItem,
    Chip,
    Typography,
    NoSsr,
    Card,
    Grid,
    makeStyles
} from "@material-ui/core";
import NativeSelect from '@material-ui/core/Select';
import { Notice, KTCodeExample } from "../../../_metronic/_partials/controls";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    rowMargin: {
        marginTop: 20
    }

}));

export const PKS = () => {
    const suhbeader = useSubheader();
    suhbeader.setTitle("Perjanjian Kerjasama");
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [dataMou, setDatamou] = useState([
        {
            "no": "4",
            "mitra": "UNIVERSITAS SRIWIJAYA",
            "unitKerja": "Sekertaris Mentri",
            "bidangKerjasama": "Olahraga",
            "namaPerjanjian": "INTEGRASI PROGRAM POLITEKNIK OLAHRAGA INDONESIA",
            "tempatPenandatanganan": "Gd. PPITKON Lt. 2 Kemenpora",
            "tanggalPenandatanganan": "8 Juli 2019",
            "statusPerjanjian": "8 Juli - 31 Desember 2019 Cara Pengakhiran : Memberikan Laporan Pertanggungjawaban Keuangan dan Kegiatan",
            "bidangImplementasi": "Program Olahraga",
            "jenisImplementasi": "INTEGRASI PROGRAM POLITEKNIK OLAHRAGA INDONESIA",
            "keterangan": "PKS sudah tidak berlaku",
            "namaDokumen": "PKS Kemenpora Unsri"
        }
    ])
    const [detailData, setDetaildata] = useState({})

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleDocument = () => { }

    function alertClicked() {
        alert('You clicked the third ListGroupItem');
    }

    const clickAction = (data) => {
        setShow2(true);
        setDetaildata(data)
    }

    return (
        <div>
            <Notice>
                {/* <Button onClick={() => setShow(true)} variant="primary">Tambah PKS</Button> */}
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nama Mitra</th>
                            <th>Unit Kerja</th>
                            <th>Bidang Kerjasama</th>
                            <th>Nama Perjanjian</th>
                            <th>Tempat Penandatanganan</th>
                            <th>Tanggal Penandatanganan</th>
                            {/* <th>Nilai Yang Sudah Digunakan (Rp)</th> */}
                            <th>Status Perjanjian</th>
                            <th>Bidang Implementasi</th>
                            <th>Jenis Implementasi</th>
                            <th>Keterangan</th>
                            <th>Output</th>
                            <th>Action</th>
                            {/* <th>Prosentase Kemajuan Kegiatan</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            console.log('lihat data', dataMou)
                        }
                        {
                            dataMou.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.no}</td>
                                    <td>{value.mitra}</td>
                                    <td>{value.unitKerja}</td>
                                    <td>{value.bidangKerjasama}</td>
                                    <td>{value.namaPerjanjian}</td>
                                    <td>{value.tempatPenandatanganan}</td>
                                    <td>{value.tanggalPenandatanganan}</td>
                                    <td>{value.statusPerjanjian}</td>
                                    <td>{value.bidangImplementasi}</td>
                                    <td>{value.jenisImplementasi}</td>
                                    <td>{value.keterangan}</td>
                                    <td><a href="#">{value.namaDokumen}</a></td>
                                    <td>
                                        <Button onClick={() => clickAction(value)} variant="primary">...</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Notice>

            <Modal
                // {...this.props}
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Tambah PKS
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Nama Mitra</Form.Label>
                                    {/* <Form.Control as="select">
                                        <option>KONI PUSAT</option>
                                        <option>Kementrian Desa</option>
                                        <option>Kementrian Riset Teknologi dan Pendidikan Kebudayaan</option>
                                        <option>Kementrian Ketenagakerjaan</option>
                                    </Form.Control> */}
                                    <Form.Control type="" placeholder="Nama Mitra" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Unit Kerja</Form.Label>
                                    <Form.Control type="" placeholder="Unit Kerja" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Bidang Kerjasama</Form.Label>
                                    <Form.Control type="" placeholder="Bidang Kerjasama" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nama Perjanjian</Form.Label>
                                    <Form.Control type="" placeholder="Nama Perjanjian" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Tempat Penandatanganan</Form.Label>
                                    <Form.Control type="" placeholder="Tempat Penandatanganan" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Tanggal Penandatanganan</Form.Label>
                                    <Form.Control type="" placeholder="Tanggal Penandatanganan" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Status Perjanjian</Form.Label>
                                    <Form.Control type="" placeholder="Status Perjanjian" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Bidang Implementasi</Form.Label>
                                    <Form.Control type="" placeholder="Bidang Implementasi" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Jenis Implementasi</Form.Label>
                                    <Form.Control type="" placeholder="Jenis Implementasi" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                    <Row className={'mt-10'}>
                        {/* <Col>
                            <h4>Perkiraan HNA</h4>
                            <hr />
                            <h5>Rp 15.000/Capsule</h5>
                        </Col>
                        <Col>
                            <h4>Perkiraan HJA</h4>
                            <hr />
                            <h5>Rp 14.000/Capsule</h5>
                        </Col> */}
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>Batal</Button>
                    <Button onClick={handleClose}>Simpan</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                // {...this.props}
                show={show2}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Tindak Lanjut PKS
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Nama Mitra</Form.Label>
                                    {/* <Form.Control as="select">
                                        <option>KONI PUSAT</option>
                                        <option>Kementrian Desa</option>
                                        <option>Kementrian Riset Teknologi dan Pendidikan Kebudayaan</option>
                                        <option>Kementrian Ketenagakerjaan</option>
                                    </Form.Control> */}
                                    {/* <Form.Control type="" placeholder="Nama Mitra" onChange={() => detailData.mitra} /> */}
                                    <p>{detailData.mitra}</p>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Unit Kerja</Form.Label>
                                    {/* <Form.Control type="" placeholder="Unit Kerja" onChange={() => detailData.unitKerja} /> */}
                                    <p>{detailData.unitKerja}</p>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Bidang Kerjasama</Form.Label>
                                    {/* <Form.Control type="" placeholder="Bidang Kerjasama" /> */}
                                    <p>{detailData.bidangKerjasama}</p>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nama Perjanjian</Form.Label>
                                    {/* <Form.Control type="" placeholder="Nama Perjanjian" /> */}
                                    <p>{detailData.namaPerjanjian}</p>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Tempat Penandatanganan</Form.Label>
                                    {/* <Form.Control type="" placeholder="Tempat Penandatanganan" /> */}
                                    <p>{detailData.tempatPenandatanganan}</p>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Tanggal Penandatanganan</Form.Label>
                                    {/* <Form.Control type="" placeholder="Tanggal Penandatanganan" /> */}
                                    <p>{detailData.tanggalPenandatanganan}</p>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Status Perjanjian</Form.Label>
                                    {/* <Form.Control type="" placeholder="Status Perjanjian" /> */}
                                    <p>{detailData.statusPerjanjian}</p>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Bidang Implementasi</Form.Label>
                                    {/* <Form.Control type="" placeholder="Bidang Implementasi" /> */}
                                    <p>{detailData.bidangImplementasi}</p>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Jenis Implementasi</Form.Label>
                                    {/* <Form.Control type="" placeholder="Jenis Implementasi" /> */}
                                    <p>{detailData.jenisImplementasi}</p>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Keterangan</Form.Label>
                                    <Form.Control type="" placeholder="Keterangan" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Upload Hasil Laporan</Form.Label>
                                <Button className="ml-10" onClick={handleClose}>+</Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row className={'mt-10'}>
                        {/* <Col>
                            <h4>Perkiraan HNA</h4>
                            <hr />
                            <h5>Rp 15.000/Capsule</h5>
                        </Col>
                        <Col>
                            <h4>Perkiraan HJA</h4>
                            <hr />
                            <h5>Rp 14.000/Capsule</h5>
                        </Col> */}
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose2}>Batal</Button>
                    <Button onClick={handleClose2}>Simpan</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
