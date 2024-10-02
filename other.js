{
    "elmType": "div",
    "attributes": {
        "class": "ms-borderColor-neutralTertiary"
    },
    "style": {
        "width": "100%",
        "border-top-width": "0px",
        "border-bottom-width": "1px",
        "border-left-width": "0px",
        "border-right-width": "0px",
        "border-style": "solid",
        "margin-bottom": "16px"
    },
    "children": [
        {
            "elmType": "div",
            "style": {
                "display": "flex",
                "box-sizing": "border-box",
                "align-items": "center"
            },
            "children": [
                {
                    "elmType": "div",
                    "attributes": {
                        "iconName": "UserWarning",
                        "class": "ms-fontSize-42 ms-fontWeight-regular ms-fontColor-themePrimary",
                        "title": "Details"
                    },
                    "style": {
                        "flex": "none",
                        "padding": "0px",
                        "padding-left": "0px",
                        "height": "36px"
                    }
                }
            ]
        },
        {
            "elmType": "div",
            "attributes": {
                "class": "ms-fontColor-neutralSecondary ms-fontWeight-bold ms-fontSize-24"
            },
            "style": {
                "box-sizing": "border-box",
                "width": "100%",
                "text-align": "left",
                "padding": "21px 12px",
                "overflow": "hidden"
            },
            "children": [
                {
                    "elmType": "div",
                    "txtContent": "='CASO #' + [$ID] + ' Resumen: ' + [$Title]"
                }
            ]
        }
    ]
}

{
    "sections": [
        {
            "displayname": "🕵️ Detalles del caso",
            "fields": [
                "Resumen",
                "Descripción del problema"
            ]
        },
        {
            "displayname": "🔄️ Datos del servicio",
            "fields": [
                "Estado",
                "Resolución",
                "¿Cual es el tipo de solicitud?",
                "Responsable Remotamente",
                "¿A que área pertenece el caso?",
                "Prioridad"
            ]
        },
        {
            "displayname": "👩‍💼Datos del cliente",
            "fields": [
                "Correo del solicitante",
                "Correo de Jefe del solicitante",
                "Compañia del solicitante",
                "Celular del solicitante",
                "Ciudad del solicitante",
                "Rol del solicitante",
                "Tipo de contrato",
                "Nombre del solicitante",
                "Dirección del solicitante"
            ]
        },
        {
            "displayname": "💻 Datos del equipo",
            "fields": [
                "Área donde se encuentra el equipo",
                "Nombre del equipo atendido",
                "Serial del equipo atendido",
                "Estado fisico del equipo",
                "Marca del equipo",
                "Modelo del equipo"
            ]
        },
        {
            "displayname": "👨‍💻 Datos del Técnico",
            "fields": [
                "Nombre del técnico en sitio",
                "Celular del técnico",
                "Cedula del técnico",
                "Correo del técnico en sitio"
            ]
        },
        {
            "displayname": "🗓️ Fechas",
            "fields": [
                "Fecha y hora de atención",
                "Fecha y hora de asignación del técnico",
                "Fecha y hora de llegada del técnico",
                "Fecha y hora de salida del técnico",
                "Fecha y hora de cierre de la solicitud"
            ]
        },
        {
            "displayname": "👍 Catálogo",
            "fields": [
                "¿Cual es el tipo de servicio?",
                "¿Cual es el tipo de actividad?",
                "¿Por que medio le solicitaron el caso?",
                "¿El caso es facturable?",
                "¿Desde cual ciudad presto el servicio?",
                "¿El caso se soluciono remoto o en sitio?",
                "¿Cual fue la solución?"
            ]
        },
        {
            "displayname": "⏱️ Solución",
            "fields": [
                "Recomendaciones",
                "Solución detallada del caso"
            ]
        },
        {
            "displayname": "Elemento",
            "fields": [
                "Fecha de notificación",
                "Imágenes",
                "Origen del problema",
                "Problema registrado por"
            ]
        }
    ]
}




//Json encuesta remota
{
    "formValues":[
        {
            "FieldName":"_x00bf_C_x00f3_mocalificar_x00ed",
            "FieldValue":"@{body('Obtener_los_detalles_de_la_respuesta')?['r7102f334f1d74824a48b8ccfd03ac853']}"
         },
{
            "FieldName":"_x00bf_C_x00f3_moevaluar_x00ed_a",
            "FieldValue":"@{body('Obtener_los_detalles_de_la_respuesta')?['r3af94b617680433ca5ca685efed8131f']}"
         },
{
            "FieldName":"_x00bf_C_x00f3_mocalificar_x00ed0",
            "FieldValue":"@{body('Obtener_los_detalles_de_la_respuesta')?['rd8840c186bc4449d9fcb280f77cbd8ba']}"
         },
{
            "FieldName":"_x00bf_Tienealg_x00fa_ncomentari",
            "FieldValue":"@{body('Obtener_los_detalles_de_la_respuesta')?['r1d015968a4934f4681ee36e767b2f1dd']}"
         }
    ]
}

//Json encuesta Sitio

{
    "formValues":[
        {
            "FieldName":"_x00bf_C_x00f3_mocalificar_x00ed", //¿Cómo calificaría su experiencia general con el servicio?
            "FieldValue":"@{body('Obtener_los_detalles_de_la_respuesta')?['r7102f334f1d74824a48b8ccfd03ac853']}"
         },
{
            "FieldName":"_x00bf_C_x00f3_mocalificar_x00ed0", //¿Cómo calificaría la calidad del trabajo realizado?
            "FieldValue":"@{body('Obtener_los_detalles_de_la_respuesta')?['rd8840c186bc4449d9fcb280f77cbd8ba']}"
         },
{
            "FieldName":"_x00bf_Tienealg_x00fa_ncomentari", //¿Tiene algún comentario adicional sobre su experiencia con el servicio en sitio?
            "FieldValue":"@{body('Obtener_los_detalles_de_la_respuesta')?['r1d015968a4934f4681ee36e767b2f1dd']}"
         },
{           
            "FieldName":"_x00bf_C_x00f3_moevaluar_x00ed_a0", //¿Cómo evaluaría la puntualidad del personal?
            "FieldValue":"@{body('Obtener_los_detalles_de_la_respuesta')?['rfb197c597a8343e6b0984412bc535af6']}"
         },
{           
            "FieldName":"_x00bf_Qu_x00e9_tansatisfechoest", //¿Qué tan satisfecho está con el profesionalismo y la actitud del personal durante el servicio en sitio?
            "FieldValue":"@{body('Obtener_los_detalles_de_la_respuesta')?['rf757f941c878457589becca99933a643']}"
          }
    ]
}