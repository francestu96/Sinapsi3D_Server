module.exports = (nome) => `
<html 4email data-css-strict>

<head>
    <meta charset="utf-8">
    <style amp4email-boilerplate>
        body {
            visibility: hidden
        }
    </style>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <style amp-custom>
        .section-title {
            padding: 5px 10px;
            background-color: #F6F6F6;
            border: 1px solid #DFDFDF;
            outline: 0;
        }

        .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
        }

        .es-button-border:hover a.es-button,
        .es-button-border:hover button.es-button {
            background: #40B8EC;
            border-color: #40B8EC;
        }

        .es-button-border:hover {
            border-color: #42D159 #42D159 #42D159 #42D159;
            background: #40B8EC;
        }

        body {
            width: 100%;
            font-family: arial, "helvetica neue", helvetica, sans-serif;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0px;
        }

        table td,
        body,
        .es-wrapper {
            padding: 0;
            Margin: 0;
        }

        .es-content,
        .es-header,
        .es-footer {
            table-layout: fixed;
            width: 100%;
        }

        p,
        hr {
            Margin: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
            Margin: 0;
            line-height: 120%;
            font-family: arial, "helvetica neue", helvetica, sans-serif;
        }

        .es-left {
            float: left;
        }

        .es-right {
            float: right;
        }

        .es-p5 {
            padding: 5px;
        }

        .es-p5t {
            padding-top: 5px;
        }

        .es-p5b {
            padding-bottom: 5px;
        }

        .es-p5l {
            padding-left: 5px;
        }

        .es-p5r {
            padding-right: 5px;
        }

        .es-p10 {
            padding: 10px;
        }

        .es-p10t {
            padding-top: 10px;
        }

        .es-p10b {
            padding-bottom: 10px;
        }

        .es-p10l {
            padding-left: 10px;
        }

        .es-p10r {
            padding-right: 10px;
        }

        .es-p15 {
            padding: 15px;
        }

        .es-p15t {
            padding-top: 15px;
        }

        .es-p15b {
            padding-bottom: 15px;
        }

        .es-p15l {
            padding-left: 15px;
        }

        .es-p15r {
            padding-right: 15px;
        }

        .es-p20 {
            padding: 20px;
        }

        .es-p20t {
            padding-top: 20px;
        }

        .es-p20b {
            padding-bottom: 20px;
        }

        .es-p20l {
            padding-left: 20px;
        }

        .es-p20r {
            padding-right: 20px;
        }

        .es-p25 {
            padding: 25px;
        }

        .es-p25t {
            padding-top: 25px;
        }

        .es-p25b {
            padding-bottom: 25px;
        }

        .es-p25l {
            padding-left: 25px;
        }

        .es-p25r {
            padding-right: 25px;
        }

        .es-p30 {
            padding: 30px;
        }

        .es-p30t {
            padding-top: 30px;
        }

        .es-p30b {
            padding-bottom: 30px;
        }

        .es-p30l {
            padding-left: 30px;
        }

        .es-p30r {
            padding-right: 30px;
        }

        .es-p35 {
            padding: 35px;
        }

        .es-p35t {
            padding-top: 35px;
        }

        .es-p35b {
            padding-bottom: 35px;
        }

        .es-p35l {
            padding-left: 35px;
        }

        .es-p35r {
            padding-right: 35px;
        }

        .es-p40 {
            padding: 40px;
        }

        .es-p40t {
            padding-top: 40px;
        }

        .es-p40b {
            padding-bottom: 40px;
        }

        .es-p40l {
            padding-left: 40px;
        }

        .es-p40r {
            padding-right: 40px;
        }

        .es-menu td {
            border: 0;
        }

        s {
            text-decoration: line-through;
        }

        a {
            text-decoration: underline;
        }

        p,
        ul li,
        ol li {
            font-family: arial, "helvetica neue", helvetica, sans-serif;
            line-height: 150%;
        }

        ul li,
        ol li {
            Margin-bottom: 15px;
        }

        .es-menu td a {
            text-decoration: none;
            display: block;
        }

        .es-menu img,
        .es-button img {
            vertical-align: middle;
        }

        .es-wrapper {
            width: 100%;
            height: 100%;
            background-color: #FFFFFF;
        }

        .es-wrapper-color {
            background-color: #FFFFFF;
        }

        .es-header {
            background-color: transparent;
        }

        .es-header-body {
            background-color: #FFFFFF;
        }

        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li {
            color: #333333;
            font-size: 14px;
        }

        .es-header-body a {
            color: #666666;
            font-size: 14px;
        }

        .es-content-body {
            background-color: #FFFFFF;
        }

        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li {
            color: #333333;
            font-size: 14px;
        }

        .es-content-body a {
            color: #666666;
            font-size: 14px;
        }

        .es-footer {
            background-color: transparent;
        }

        .es-footer-body {
            background-color: #FFFFFF;
        }

        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li {
            color: #333333;
            font-size: 14px;
        }

        .es-footer-body a {
            color: #666666;
            font-size: 14px;
        }

        .es-infoblock,
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li {
            line-height: 120%;
            font-size: 12px;
            color: #CCCCCC;
        }

        .es-infoblock a {
            font-size: 12px;
            color: #CCCCCC;
        }

        h1 {
            font-size: 40px;
            font-style: normal;
            font-weight: bold;
            color: #333333;
        }

        h2 {
            font-size: 24px;
            font-style: normal;
            font-weight: bold;
            color: #333333;
        }

        h3 {
            font-size: 20px;
            font-style: normal;
            font-weight: normal;
            color: #333333;
        }

        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
            font-size: 40px;
        }

        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
            font-size: 24px;
        }

        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
            font-size: 20px;
        }

        .es-button-border {
            border-style: solid solid solid solid;
            border-color: #2CB543 #2CB543 #2CB543 #2CB543;
            background: #673ab7;
            border-width: 0px 0px 0px 0px;
            display: inline-block;
            border-radius: 30px;
            width: auto;
        }

        a.es-button,
        button.es-button {
            border-style: solid;
            border-color: #673ab7;
            border-width: 10px 20px 10px 20px;
            display: inline-block;
            background: #673ab7;
            border-radius: 30px;
            font-size: 18px;
            font-family: arial, "helvetica neue", helvetica, sans-serif;
            font-weight: normal;
            font-style: normal;
            line-height: 120%;
            color: #FFFFFF;
            text-decoration: none;
            width: auto;
            text-align: center;
        }

        .es-button img {
            display: inline-block;
            vertical-align: middle;
        }

        body {
            font-family: arial, "helvetica neue", helvetica, sans-serif;
        }

        input,
        textarea {
            box-sizing: border-box;
            resize: vertical;
        }

        @media only screen and (max-width:600px) {

            p,
            ul li,
            ol li,
            a {
                line-height: 150%
            }

            h1 {
                font-size: 30px;
                text-align: center;
                line-height: 120%
            }

            h2 {
                font-size: 26px;
                text-align: center;
                line-height: 120%
            }

            h3 {
                font-size: 20px;
                text-align: center;
                line-height: 120%
            }

            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
                font-size: 30px
            }

            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
                font-size: 26px
            }

            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
                font-size: 20px
            }

            .es-menu td a {
                font-size: 12px
            }

            .es-header-body p,
            .es-header-body ul li,
            .es-header-body ol li,
            .es-header-body a {
                font-size: 16px
            }

            .es-content-body p,
            .es-content-body ul li,
            .es-content-body ol li,
            .es-content-body a {
                font-size: 16px
            }

            .es-footer-body p,
            .es-footer-body ul li,
            .es-footer-body ol li,
            .es-footer-body a {
                font-size: 16px
            }

            .es-infoblock p,
            .es-infoblock ul li,
            .es-infoblock ol li,
            .es-infoblock a {
                font-size: 12px
            }

            *[class="gmail-fix"] {
                display: none
            }

            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3 {
                text-align: center
            }

            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3 {
                text-align: right
            }

            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3 {
                text-align: left
            }

            .es-m-txt-r img {
                float: right
            }

            .es-m-txt-c img {
                margin: 0 auto
            }

            .es-m-txt-l img {
                float: left
            }

            .es-button-border {
                display: inline-block
            }

            .es-adaptive table,
            .es-left,
            .es-right {
                width: 100%
            }

            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
                width: 100%;
                max-width: 600px
            }

            .es-adapt-td {
                display: block;
                width: 100%
            }

            .adapt-img {
                width: 100%;
                height: auto
            }

            td.es-m-p0 {
                padding: 0
            }

            td.es-m-p0r {
                padding-right: 0
            }

            td.es-m-p0l {
                padding-left: 0
            }

            td.es-m-p0t {
                padding-top: 0
            }

            td.es-m-p0b {
                padding-bottom: 0
            }

            td.es-m-p20b {
                padding-bottom: 20px
            }

            .es-mobile-hidden,
            .es-hidden {
                display: none
            }

            tr.es-desk-hidden,
            td.es-desk-hidden,
            table.es-desk-hidden {
                width: auto;
                overflow: visible;
                float: none;
                max-height: inherit;
                line-height: inherit
            }

            tr.es-desk-hidden {
                display: table-row
            }

            table.es-desk-hidden {
                display: table
            }

            td.es-desk-menu-hidden {
                display: table-cell
            }

            .es-menu td {
                width: 1%
            }

            table.es-table-not-adapt,
            .esd-block-html table {
                width: auto
            }

            table.es-social {
                display: inline-block
            }

            table.es-social td {
                display: inline-block
            }

            a.es-button,
            button.es-button {
                font-size: 20px;
                display: inline-block
            }

            td.es-m-p5 {
                padding: 5px
            }

            td.es-m-p5t {
                padding-top: 5px
            }

            td.es-m-p5b {
                padding-bottom: 5px
            }

            td.es-m-p5r {
                padding-right: 5px
            }

            td.es-m-p5l {
                padding-left: 5px
            }

            td.es-m-p10 {
                padding: 10px
            }

            td.es-m-p10t {
                padding-top: 10px
            }

            td.es-m-p10b {
                padding-bottom: 10px
            }

            td.es-m-p10r {
                padding-right: 10px
            }

            td.es-m-p10l {
                padding-left: 10px
            }

            td.es-m-p15 {
                padding: 15px
            }

            td.es-m-p15t {
                padding-top: 15px
            }

            td.es-m-p15b {
                padding-bottom: 15px
            }

            td.es-m-p15r {
                padding-right: 15px
            }

            td.es-m-p15l {
                padding-left: 15px
            }

            td.es-m-p20 {
                padding: 20px
            }

            td.es-m-p20t {
                padding-top: 20px
            }

            td.es-m-p20r {
                padding-right: 20px
            }

            td.es-m-p20l {
                padding-left: 20px
            }

            td.es-m-p25 {
                padding: 25px
            }

            td.es-m-p25t {
                padding-top: 25px
            }

            td.es-m-p25b {
                padding-bottom: 25px
            }

            td.es-m-p25r {
                padding-right: 25px
            }

            td.es-m-p25l {
                padding-left: 25px
            }

            td.es-m-p30 {
                padding: 30px
            }

            td.es-m-p30t {
                padding-top: 30px
            }

            td.es-m-p30b {
                padding-bottom: 30px
            }

            td.es-m-p30r {
                padding-right: 30px
            }

            td.es-m-p30l {
                padding-left: 30px
            }

            td.es-m-p35 {
                padding: 35px
            }

            td.es-m-p35t {
                padding-top: 35px
            }

            td.es-m-p35b {
                padding-bottom: 35px
            }

            td.es-m-p35r {
                padding-right: 35px
            }

            td.es-m-p35l {
                padding-left: 35px
            }

            td.es-m-p40 {
                padding: 40px
            }

            td.es-m-p40t {
                padding-top: 40px
            }

            td.es-m-p40b {
                padding-bottom: 40px
            }

            td.es-m-p40r {
                padding-right: 40px
            }

            td.es-m-p40l {
                padding-left: 40px
            }

            button.es-button {
                width: 100%
            }
        }
    </style>
</head>

<body>
    <div class="es-wrapper-color">
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tr>
                <td valign="top">
                    <table cellpadding="0" cellspacing="0" class="es-header" align="center">
                        <tr>
                            <td align="center"
                                style="background-image: url(https://pewtbf.stripocdn.email/content/guids/CABINET_3b670d78779801705eef224a1b9fbd70/images/39721614698061295.png);background-repeat: no-repeat;background-position: left center;background-color: #ffffff"
                                bgcolor="#ffffff">
                                <table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600"
                                    style="background-color: transparent">
                                    <tr>
                                        <td style="padding-top: 20px;"class="es-m-p0b" align="left">
                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td width="560" class="es-m-p0r" valign="top" align="center">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation">
                                                            <tr>
                                                                <td align="center" style="font-size: 0px">
                                                                        <img
                                                                            src="cid:sinapsi3d"
                                                                            alt="Logo" style="display: block"
                                                                            width="100" title="Logo" height="80">
                                                                        </img>
                                                                    </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="es-p20r es-p20l es-m-p20b" align="left">
                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td width="560" align="center" valign="top">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation">
                                                            <tr>
                                                                <td align="center" class="es-p10t es-p10b"
                                                                    style="font-size:0">
                                                                    <table border="0" width="100%" cellpadding="0"
                                                                        cellspacing="0" role="presentation">
                                                                        <tr>
                                                                            <td
                                                                                style="border-bottom: 1px solid #673ab7;background: none;height: 1px;width: 100%;margin: 0px">
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" class="es-p20t es-p5b es-m-txt-l">
                                                                    <h2 style="line-height: 120%">
                                                                        Ciao <b>${nome}</b>!
                                                                    </h2>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" class="es-p10t es-p10b es-m-txt-l">
                                                                <p>
                                                                    Benvenuto in Sinapsi 3D, la tua registrazione è avvenuta con successo!
                                                                </p>
                                                                <p>
                                                                    Siamo lieti di conoscerti! Non dimenticare di seguirci sui nostri social per avere
                                                                    aggioramenti continui sui nostri lavori e prodotti. Per qualsiasi informazione non esitare 
                                                                    a contattarci!<br><br>
                                                                    Con affetto,<br>
                                                                    Il team di Sinapsi 3D<br>
                                                                </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                        <tr>
                            <td align="center" bgcolor="#efefef"
                                style="background-color: #efefef;background-image: url(https://pewtbf.stripocdn.email/content/guids/CABINET_3b670d78779801705eef224a1b9fbd70/images/45221614776828358.png);background-repeat: no-repeat;background-position: right top">
                                <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600"
                                    style="background-color: transparent">
                                    <tr>
                                        <td class="es-p20t es-p20r es-p20l" align="left">
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                <tr>
                                                    <td width="245" class="es-m-p20b" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation">
                                                            <tr>
                                                                <td align="left" class="es-m-txt-c"
                                                                    style="font-size: 0px">
                                                                        <img
                                                                            src="cid:sinapsi3d"
                                                                            alt style="display: block" width="90"
                                                                            height="70"></img>
                                                                    </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" class="es-p10t es-p10b">
                                                                    <p>
                                                                        Lavoriamo per garantire ai nostri clienti i prodotti della migliore qualità!
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                <tr>
                                                    <td width="295" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation">
                                                            <tr>
                                                                <td align="left" class="es-p20t">
                                                                    <h3>Official info</h3>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                                        class="es-menu" role="presentation">
                                                                        <tr class="links-images-left">
                                                                            <td align="left" valign="top" width="100%"
                                                                                class="es-p10t es-p10b es-p5r es-p5l"
                                                                                id="esd-menu-id-0"
                                                                                style="padding-bottom: 7px">
                                                                                    <img
                                                                                        src="cid:place"
                                                                                        alt="Genova, Italia"
                                                                                        title="Genova, Italia"
                                                                                        width="20" height="20"
                                                                                        style="margin-right:5px">
                                                                                    </img>
                                                                                    Genova, Italia
                                                                                </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                                        class="es-menu" role="presentation">
                                                                        <tr class="links-images-left">
                                                                            <td align="left" valign="top" width="100%"
                                                                                class="es-p10t es-p10b es-p5r es-p5l"
                                                                                id="esd-menu-id-0"
                                                                                style="padding-top: 7px;padding-bottom: 7px">
                                                                                    <img
                                                                                        src="cid:phone"
                                                                                        alt="+39 3477944844"
                                                                                        title="+39 3477944844"
                                                                                        width="20"
                                                                                        style="margin-right:5px"
                                                                                        height="20"></img>
                                                                                    +39 3477944844
                                                                                </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                                        class="es-menu" role="presentation">
                                                                        <tr class="links-images-left">
                                                                            <td align="left" valign="top" width="100%"
                                                                                class="es-p10t es-p10b es-p5r es-p5l"
                                                                                id="esd-menu-id-0"
                                                                                style="padding-top: 7px">
                                                                                    <img
                                                                                        src="cid:email"
                                                                                        alt="sinapsi3d@outlook.it"
                                                                                        title="sinapsi3d@outlook.it"
                                                                                        width="20" height="20"
                                                                                        style="margin-right:5px">
                                                                                    </img>
                                                                                    sinapsi3d@outlook.it
                                                                                </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="es-p20" align="left">
                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td width="560" align="center" valign="top">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation">
                                                            <tr>
                                                                <td align="center" style="font-size:0">
                                                                    <table cellpadding="0" cellspacing="0"
                                                                        class="es-table-not-adapt es-social"
                                                                        role="presentation">
                                                                        <tr>
                                                                            <td align="center" valign="top"><a
                                                                                class="es-p25r"
                                                                                    target="_blank"
                                                                                    href="https://www.youtube.com/channel/UCkIlnm3o_d7PmxoOMnYXk7w">
                                                                                    <img style="margin: 10px" title="Youtube"
                                                                                        src="https://pewtbf.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png"
                                                                                        alt="Yt" width="32" height="32">
                                                                                    </img>
                                                                                </a></td>
                                                                            <td align="center" valign="top"
                                                                                class="es-p25r"><a target="_blank"
                                                                                    href="https://www.instagram.com/sinapsi3d/?hl=it">
                                                                                    <img style="margin: 10px" title="Instagram"
                                                                                        src="https://pewtbf.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png"
                                                                                        alt="Inst" width="32"
                                                                                        height="32"></img>
                                                                                </a></td>
                                                                            <td align="center" valign="top"
                                                                                class="es-p25r"><a target="_blank"
                                                                                    href="https://www.facebook.com/Sinapsi3d/">
                                                                                    <img style="margin: 10px" title="Facebook"
                                                                                        src="https://pewtbf.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png"
                                                                                        alt="Fb" width="32" height="32">
                                                                                    </img>
                                                                                </a></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
`