const { request, response } = require('express');
const bitacora = require('../models/sqlBitacora');

const registroContrato = async (req = request, res = response) => {
    const contrato = req.body.contrato;
    const cliente = req.body.cliente;
    const itsTrue = req.body.itsTrue;
    const municipio = req.body.municipio;

    if(!contrato || !cliente || !itsTrue || !municipio){
        return res.status(400).json({
            ok: false,
            msg: 'Todos los campos son requeridos'
        });
    }

    const query = 'INSERT INTO Consulta_contrato(id_contrato, nombre_usuario, fecha_consulta, its_true, id_municipio) VALUES (?,?,NOW(),?, ?)';

    try{

        await bitacora.promise().execute(query, [contrato, cliente, itsTrue, municipio]);

        return res.status(200).json({
            ok: true,
            msg: 'Contrato registrado'
        });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al registrar el contrato'
        });
    }
}

const registrarIntentoPago = async (req = request, res = response) => {
    const contrato = req.body.contrato;
    const tipoPago = req.body.tipoPago;
    const municipio = req.body.municipio;

    if(!contrato || !tipoPago || !municipio){
        return res.status(400).json({
            ok: false,
            msg: 'Todos los campos son requeridos'
        });
    }

    const query = 'INSERT INTO intento_pago(id_contrato, tipo_pago, fecha_consulta, id_municipio) VALUES (?,?,NOW(),?)';

    try{
            
            await bitacora.promise().execute(query, [contrato, tipoPago, municipio]);
    
            return res.status(200).json({
                ok: true,
                msg: 'Intento de pago registrado'
            });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al registrar el intento de pago'
        });
    }
    
}

const registroPagoAprovado = async (req = request, res = response) => {
    const contrato = req.body.contrato;
    const tipo_pago = req.body.tipo_pago;
    const monto = req.body.monto;
    const authorizacion_pago = req.body.authorizacion_pago;
    const orden_codigo = req.body.orden_codigo;
    const referencia_codigo = req.body.referencia_codigo;
    const municipio = req.body.municipio;

    if(!contrato || !tipo_pago || !monto || !authorizacion_pago || !orden_codigo || !referencia_codigo || !municipio){
        return res.status(400).json({
            ok: false,
            msg: 'Todos los campos son requeridos'
        });
    }

    const query = 'INSERT INTO pago_aprovado(id_contrato, tipo_pago, fecha_consulta, cantidad_pago, authorizacion_pago, orden_codigo, referencia_codigo, id_municipio) VALUES (?,?,NOW(),?,?,?,?,?)';

    try{
            
            await bitacora.promise().execute(query, [contrato, tipo_pago, monto, authorizacion_pago, orden_codigo, referencia_codigo, municipio]);
    
            return res.status(200).json({
                ok: true,
                msg: 'Pago aprovado registrado'
            });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al registrar el pago anticipado'
        });
    }
    
}

const registroPagoRechazado = async (req = request, res = response) => {
    const contrato = req.body.contrato;
    const tipo_pago = req.body.tipo_pago;
    const monto = req.body.monto;
    const authorizacion_pago = req.body.authorizacion_pago;
    const orden_codigo = req.body.orden_codigo;
    const referencia_codigo = req.body.referencia_codigo;
    const municipio = req.body.municipio;

    if(!contrato || !tipo_pago || !monto || !authorizacion_pago || !orden_codigo || !referencia_codigo || !municipio){
        return res.status(400).json({
            ok: false,
            msg: 'Todos los campos son requeridos'
        });
    }

    const query = 'INSERT INTO pago_rechazado(id_contrato, tipo_pago, fecha_consulta, cantidad_pago, authorizacion_pago, orden_codigo, referencia_codigo, id_municipio) VALUES (?,?,NOW(),?,?,?,?,?)';

    try{
            
            await bitacora.promise().execute(query, [contrato, tipo_pago, monto, authorizacion_pago, orden_codigo, referencia_codigo, municipio]);
    
            return res.status(200).json({
                ok: true,
                msg: 'Pago rechazado registrado'
            });

    }catch(err){
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Error al registrar el pago anticipado'
        });
    }
    
}

module.exports = {
    registroContrato,
    registrarIntentoPago,
    registroPagoAprovado,
    registroPagoRechazado
} 