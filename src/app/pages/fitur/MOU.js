import React, { useState } from "react";
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

export const MOU = () => {
    const suhbeader = useSubheader();
    suhbeader.setTitle("MOU");
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleDocument = () => {}

    function alertClicked() {
        alert('You clicked the third ListGroupItem');
    }

    return (
        <div>
            <Notice>
                <Button onClick={() => setShow(true)} variant="primary">Tambah MOU</Button>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nama Mitra</th>
                            <th>Judul MOU</th>
                            <th>Periode</th>
                            <th>Lingkup Kegiatan</th>
                            <th>Nilai Kontrak (Rp)</th>
                            {/* <th>Nilai Yang Sudah Digunakan (Rp)</th> */}
                            <th>Nama dan Unit Tim Pelaksana (PIC)</th>
                            <th>Hasil</th>
                            <th>Action</th>
                            {/* <th>Prosentase Kemajuan Kegiatan</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>KONI PUSAT</td>
                            <td>Kegiatan Olahraga</td>
                            <td>2021 - 2022</td>
                            <td>Pertandingan Bola Antar Pelajar</td>
                            <td>Rp 300.000.000</td>
                            {/* <td>Rp 50.000.000</td> */}
                            <td>Asisten Deputi 3</td>
                            <td><a href="#">Dokumen 1</a></td>
                            <td>
                                <Button onClick={() => setShow2(true)} variant="primary">...</Button>
                            </td>
                            {/* <td>40%</td> */}
                        </tr>
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
                        Tambah MOU
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
                                    <Form.Label>Nomer MOU</Form.Label>
                                    <Form.Control type="" placeholder="No. MOU" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Judul MOU</Form.Label>
                                    <Form.Control type="" placeholder="Judul MOU" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Lingkup Kegiatan</Form.Label>
                                    <Form.Control type="" placeholder="Lingkup Kegiatan" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Periode Kerjasama</Form.Label>
                                    <Form.Control as="select">
                                        <option>2020 - 2021</option>
                                        <option>2021 - 2022</option>
                                        <option>2022 - 2023</option>
                                        <option>2023 - 2024</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nama PIC</Form.Label>
                                    <Form.Control type="" placeholder="Nama PIC" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nilai Kerjasama (Rp)</Form.Label>
                                    <Form.Control type="" placeholder="Nilai Kerjasama (Rp)" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Sumber Pendanaan</Form.Label>
                                    <Form.Control type="" placeholder="Sumber Pendanaan" />
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
                        Edit MOU
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
                                    <Form.Label>Nomer MOU</Form.Label>
                                    <Form.Control type="" placeholder="No. MOU" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Judul MOU</Form.Label>
                                    <Form.Control type="" placeholder="Judul MOU" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Lingkup Kegiatan</Form.Label>
                                    <Form.Control type="" placeholder="Lingkup Kegiatan" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Periode Kerjasama</Form.Label>
                                    <Form.Control as="select">
                                        <option>2020 - 2021</option>
                                        <option>2021 - 2022</option>
                                        <option>2022 - 2023</option>
                                        <option>2023 - 2024</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nama PIC</Form.Label>
                                    <Form.Control type="" placeholder="Nama PIC" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nilai Kerjasama (Rp)</Form.Label>
                                    <Form.Control type="" placeholder="Nilai Kerjasama (Rp)" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Sumber Pendanaan</Form.Label>
                                    <Form.Control type="" placeholder="Sumber Pendanaan" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Upload Dokumen</Form.Label>
                                    <Button className="ml-10" onClick={handleClose}>+</Button>
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
                    <Button variant="danger" onClick={handleClose2}>Batal</Button>
                    <Button onClick={handleClose2}>Simpan</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
