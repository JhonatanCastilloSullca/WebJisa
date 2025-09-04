import HeroSectionMidle from "../componentes/HeroSectionMidle"

const PoliticaPrivacidad = () => {
  return (
    <>
      <HeroSectionMidle
        backgroundImage='url("/agencia-de-viaje-cusco-jisaadventure.webp")'
        title="POLÍTICA DE PRIVACIDAD Y SEGURIDAD DE LA INFORMACIÓN"
        description={`Jisa Adventure trata datos personales conforme a la Ley N.º 29733 y su Reglamento. Aquí detallamos finalidades, base legal, seguridad, arquitectura de pagos con Openpay (PCI DSS) y tus derechos ARCO.`}
        buttonText="Ver Tours"
        buttonLink="https://jisaadventure.com/"
      />

      <div className="w-full max-w-7xl mx-auto mt-24 mb-12 px-4 md:px-0">
        <article className="prose prose-sm md:prose lg:prose-lg max-w-none">
          <h2>1. Identidad y contacto del responsable</h2>
          <p>
            <strong>Responsable:</strong> Jisa Adventure (la “Agencia”).<br/>
            <strong>Email privacidad:</strong> <a href="mailto:privacidad@jisaadventure.com">privacidad@jisaadventure.com</a><br/>
            <strong>Email seguridad:</strong> <a href="mailto:seguridad@jisaadventure.com">seguridad@jisaadventure.com</a><br/>
            <strong>Domicilio:</strong> Cusco, Perú (actualizar con dirección fiscal).
          </p>

          <h2>2. Alcance y marco normativo</h2>
          <p>
            Esta política aplica al sitio web, paneles de administración, APIs (Laravel), frontends (React) y canales de atención de Jisa Adventure. Nos regimos por la Ley N.º 29733 y su Reglamento. Si operan transferencias internacionales, aplicamos salvaguardas contractuales y técnicas adecuadas.
          </p>

          <h2>3. Registro de actividades de tratamiento (RAT) – resumen</h2>
          <ul>
            <li><strong>Reservas y atención:</strong> Identificación y contacto (nombre, apellidos, email, teléfono, país ISO-2), datos de viaje de pasajeros y acompañantes, preferencias.</li>
            <li><strong>Facturación:</strong> Razón social, RUC/DNI, dirección fiscal, comprobantes.</li>
            <li><strong>Pagos:</strong> <u>No almacenamos PAN ni CVV</u>. El procesamiento se realiza mediante Openpay (PCI DSS). Conservamos identificadores no sensibles (token/ID transacción), importe, estado.</li>
            <li><strong>Soporte y seguridad:</strong> registros técnicos (IP, user-agent, trazas de error, auditoría de accesos).</li>
          </ul>

          <h2>4. Finalidades y bases legales</h2>
          <ul>
            <li><strong>Ejecución de contrato:</strong> gestionar cotizaciones, reservas, pagos, emisión de comprobantes.</li>
            <li><strong>Obligación legal:</strong> obligaciones tributarias/contables y atención de requerimientos de autoridad.</li>
            <li><strong>Interés legítimo:</strong> seguridad operativa, prevención antifraude, mejora del servicio.</li>
            <li><strong>Consentimiento:</strong> comunicaciones comerciales y cookies no esenciales (revocable en cualquier momento).</li>
          </ul>

          <h2>5. Arquitectura de pagos y cumplimiento PCI</h2>
          <p>
            Implementamos pagos con <strong>Openpay</strong>. Recomendamos integrar <strong>Openpay.js / hosted fields</strong> o redirección a checkout alojado para que los datos de tarjeta se transmitan <em>directamente</em> a Openpay y no toquen nuestros servidores. Esto reduce el alcance PCI a <strong>SAQ A</strong> (o <strong>SAQ A-EP</strong> si el formulario está servido por nuestro dominio con JS propio). En todos los casos, el comercio mantiene responsabilidades de seguridad del front y enlaces/redirecciones.
          </p>
          <ol>
            <li>El cliente completa los datos de tarjeta en campos servidos/aislados por Openpay (iframes o SDK).</li>
            <li>Los datos se envían cifrados a Openpay (TLS). Nosotros recibimos un <strong>token</strong> no sensible y el <strong>estado</strong> de la transacción.</li>
            <li>Guardamos solo metadatos de pago (ID, monto, moneda, resultado, últimos 4 dígitos cuando los provee el PSP para referencia), nunca PAN completo ni CVV.</li>
            <li>Aplicamos 3-D Secure/antifraude cuando corresponda.</li>
          </ol>

          <details>
            <summary><strong>Controles recomendados en el checkout (técnico)</strong></summary>
            <ul>
              <li>Integridad de recursos: <code>Subresource Integrity (SRI)</code> y fijación de versión del SDK.</li>
              <li><code>Content-Security-Policy</code> con <code>nonce</code> y listas blancas estrictas para dominios de Openpay.</li>
              <li><code>HSTS</code>, <code>X-Frame-Options/Frame-Ancestors</code>, <code>X-Content-Type-Options</code>, <code>Referrer-Policy</code>.</li>
              <li>Monitor de integridad lado-cliente (para prevenir skimming tipo “Magecart”).</li>
              <li>Hardening: no exponer claves en front, variables a través de backend con rotación y scopes mínimos.</li>
            </ul>
            <pre>
# NGINX (ejemplo)
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Permissions-Policy "geolocation=(), microphone=()" always;
add_header X-Frame-Options "SAMEORIGIN" always;  # o usar Frame-Ancestors en CSP

# CSP (ajusta dominios de Openpay/tu CDN)
add_header Content-Security-Policy "
  default-src 'self';
  frame-ancestors 'self';
  script-src 'self' 'nonce-__RUNTIME_NONCE__' https://openpay.s3.amazonaws.com https://resources.openpay.mx;
  frame-src https://* openpay.mx openpay.s3.amazonaws.com;
  connect-src 'self' https://api.openpay.mx https://sandbox-api.openpay.mx;
  img-src 'self' data: https:;
  style-src 'self' 'unsafe-inline';
" always;
            </pre>
          </details>

          <h2>6. Medidas de seguridad (organizativas y técnicas)</h2>
          <ul>
            <li><strong>Gobernanza:</strong> roles y responsabilidades definidos (Privacidad y Seguridad), revisión anual de políticas y RAT.</li>
            <li><strong>Gestión de accesos:</strong> MFA en paneles críticos, mínimos privilegios, rotación de credenciales, bloqueo por intentos.</li>
            <li><strong>Cifrado:</strong> TLS 1.2+ en tránsito; cifrado de respaldos y secretos en reposo; gestión de claves con rotación.</li>
            <li><strong>Desarrollo seguro (SDLC):</strong> validación/escape, CSRF, control de deserialización, revisión de dependencias (SCA), auditoría de endpoints.</li>
            <li><strong>Vulnerabilidades:</strong> escaneo periódico (SAST/DAST), parcheo mensual y fuera de banda para CVEs críticos.</li>
            <li><strong>Registro y monitoreo:</strong> logs con retención y envío a SIEM, alertas de eventos anómalos, trazabilidad de acciones (auditable).</li>
            <li><strong>Backups y continuidad:</strong> copias cifradas, pruebas de restauración, RTO/RPO definidos.</li>
            <li><strong>Proveedores:</strong> acuerdos de encargado, evaluación de seguridad, control de transferencias internacionales, cláusulas de confidencialidad.</li>
          </ul>

          <h2>7. Conservación y eliminación</h2>
          <p>
            Conservamos datos por los plazos necesarios para cumplir las finalidades y obligaciones legales (por ejemplo, tributarias) y luego aplicamos <strong>borrado seguro</strong> o <strong>anonimización</strong>. Metadatos de transacciones se conservan para conciliación, contabilidad y prevención de fraude; nunca almacenamos CVV ni PAN completo.
          </p>

          <h2>8. Derechos ARCO y canales</h2>
          <p>
            Puedes ejercer <strong>Acceso, Rectificación, Cancelación y Oposición (ARCO)</strong> y retirar tu consentimiento cuando corresponda. Escríbenos a <a href="mailto:privacidad@jisaadventure.com">privacidad@jisaadventure.com</a> indicando tu nombre completo y el derecho que deseas ejercer. Responderemos en los plazos que establece la normativa peruana vigente. Si no estás conforme, puedes acudir a la Autoridad Nacional de Protección de Datos Personales.
          </p>

          <h2>9. Cookies y tecnologías similares</h2>
          <p>
            Usamos cookies necesarias para el funcionamiento del sitio y, con tu consentimiento, cookies analíticas y de personalización. Puedes gestionar preferencias desde nuestro banner y/o la configuración de tu navegador. Consulta la <a href="/politica-de-cookies">Política de Cookies</a>.
          </p>

          <h2>10. Gestión de incidentes</h2>
          <ul>
            <li><strong>Detección y respuesta:</strong> procedimientos de contención, erradicación, recuperación y lecciones aprendidas.</li>
            <li><strong>Notificación:</strong> informaremos a titulares y, cuando corresponda, a la autoridad competente en los plazos razonables previstos por la normativa aplicable.</li>
            <li><strong>Registro:</strong> cada incidente se documenta con causa raíz, alcance, evidencias y medidas correctivas.</li>
          </ul>

          <h2>11. Transferencias internacionales</h2>
          <p>
            Cuando intervengan proveedores ubicados fuera de Perú (por ejemplo, hosting, pasarela de pagos), aplicamos salvaguardas contractuales y técnicas adecuadas, y registramos o informamos las transferencias si así lo exige la normativa.
          </p>

          <h2>12. Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política por cambios normativos o operativos. Publicaremos la versión vigente en este mismo enlace.
          </p>
          <p><em>Última actualización: 02/09/2025.</em></p>
        </article>
      </div>
    </>
  )
}

export default PoliticaPrivacidad
