import type { Metadata } from "next"; 

export const metadata: Metadata = {
  title: "Frederik Kohler | Datenschutz für Mobile Apps",
  description: "Datenschutz für Mobile Apps",
};

export default function DataProtectionPage() {
  return (
     <div className="stack-sm">
      <h1 className="text-2xl">Datenschutz</h1>
      <p>Hier steht die Datenschutzerklärung.</p>

      {/* 1 Verantwortliche Stelle */}
       <div className="stack-sm py-4">
        <h2 className="text-xl"><b>1 Verantwortliche Stelle</b></h2>
        <p className="break-words whitespace-normal">
            Wir freuen uns über Ihren Besuch auf unserer Website. Zunächst möchten wir uns Ihnen als verantwortliche Stelle im Sinne des Datenschutzrechts vorstellen:
        </p>
        <p>
          Frederik Kohler<br/>Saderlacherweg 1<br/>79761 Waldshut-Tiengen
        </p>
        <p><a href="mailto:info@frederikkohler.de">info@frederikkohler.de</a></p>
      </div>


      {/* 2 Allgemeines */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b> 2 Allgemeines</b></h2>
        <p>Wir möchten Sie in Übereinstimmung mit unserer gesetzlichen Verpflichtung über die Erhebung und Verwendung Ihrer personenbezogenen Daten informieren.</p>
        <p>Wenn Sie unsere Website nutzen, werden personenbezogene Daten über Sie erfasst. Dies kann dadurch erfolgen, dass Sie die Daten eigenständig eingeben – wie z.B. Ihre Mailadresse. Unser System erfasst Daten von Ihnen aber auch automatisch, wie etwa Ihren Besuch auf unserer Website. Dies erfolgt unabhängig davon, mit welchem Gerät oder mit welcher Software Sie unsere Website nutzen.</p>
        <p>Jegliche Eingabe von Daten durch Sie auf unserer Website ist freiwillig, es treten durch die Nichtpreisgabe Ihrer Daten für Sie keine Nachteile ein. Ohne bestimmte Daten ist es uns aber nicht möglich, Leistungen zu erbringen oder Verträge zu schließen. Auf derartige Pflichtangaben werden wir Sie jeweils hinweisen.</p>
        <p>Auf dieser Webseite werden personenbezogene Daten des Nutzers nur im Rahmen des geltenden Datenschutzrechts, insbesondere der Datenschutzgrundverordnung (DSGVO), erhoben. Die in dem Text verwendeten Fachbegriffe werden in Art. 4 der DSGVO näher erläutert.</p>
        <p>Eine Datenverarbeitung ist nach der DSGVO insbesondere in drei Fällen erlaubt:</p>
        <ul className="list-disc px-5">
          <li>
            nach Art. 6 Abs. 1 lit. a und 7 DSGVO, wenn Sie in die Datenverarbeitung durch uns eingewilligt haben; jeweils werden wir Sie vorher in dieser Datenschutzerklärung und anlässlich der Einwilligung nach Maßgabe von Art. 4 Nr. 11 DSGVO genau unterrichten, wozu und unter welchen Umständen Ihre Daten von uns verarbeitet werden;
          </li>
          <li>
            nach Art. 6 Abs. 1 lit. b DSGVO, wenn die Verarbeitung Ihrer personenbezogenen Daten für die Anbahnung, den Abschluss oder die Abwicklung eines Vertragsverhältnisses erforderlich ist;
          </li>
          <li>
            nach Art. 6 Abs. 1 lit. f DSGVO, wenn nach einer Interessenabwägung die Verarbeitung zur Wahrung unserer berechtigten Interessen erforderlich ist; dazu gehören insbesondere unsere Interessen, das Angebot auf unserer Website zu analysieren, zu optimieren und abzusichern – darunter fallen vor allem eine Analyse des Nutzerverhaltens, die Erstellung von Profilen für Werbezwecke und die Speicherung von Zugriffsdaten sowie der Einsatz von dritten Anbietern.
          </li>
        </ul>
      </div>



      {/* 2.1 Bestandsdaten */}
      <div className="stack-sm py-4">
        <h3 className="text-lg"><b>2.1 Bestandsdaten</b></h3>
        <p>Wir erheben Bestandsdaten, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung eines (auch unentgeltlichen) Vertragsverhältnisses zwischen uns und dem Nutzer erforderlich sind. Dazu können gehören: Kundendaten (z. B. Name, Adresse), Kontaktdaten (z. B. E-Mail-Adresse, Telefonnummer), Leistungsdaten (z.B. bestellte Leistung, Laufzeit, Entgelt). Bei der Begründung des Nutzungsverhältnisses werden wir diese Daten von Ihnen abfragen (z. B. Name, Anschrift und E-Mail-Adresse) und Ihnen auch mitteilen, inwieweit die Angabe jeweils verbindlich erforderlich ist, um das Nutzungsverhältnis zu begründen.</p>
      </div> 

      {/* 2.2 Nutzungsdaten */}
      <div className="stack-sm py-4">
        <h3 className="text-lg"><b>2.2 Nutzungsdaten</b></h3>
        <p>Weiter erheben wir Nutzungsdaten, um die Inanspruchnahme der Dienste auf unserer Website durch den Nutzer zu ermöglichen. Dazu können gehören: Nutzungsangaben (z. B. aufgerufene Webseiten oder Bereiche, Besuchsdauer, Interesse an Leistungen), Inhaltsdaten (z. B. von Ihnen eingegebene oder hochgeladene Daten, Texte, Bilder, Töne, Videos), Metadaten (z. B. Identität Ihres Gerätes, Standort, IP-Adresse).</p>
        <p>Eine Zusammenführung von Nutzungsdaten wird von uns nur vorgenommen, sofern und soweit dies für Abrechnungszwecke erforderlich ist. Ansonsten werden wir Nutzungsdaten nur pseudonym erstellen und nur, soweit Sie dem nicht widersprochen haben. Diesen Widerspruch können Sie jederzeit an die in dem Impressum angegebene Anschrift oder den in dieser Datenschutzerklärung genannten Verantwortlichen senden.</p>
        <p>Rechtsgrundlage für diese Datenverarbeitung sind zum einen unsere berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO an der Analyse der Website und ihrer Nutzung, gegebenenfalls auch die gesetzliche Erlaubnis zur Speicherung von Daten im Rahmen der Anbahnung eines Vertragsverhältnisses gem. Art. 6 Abs. 1 lit. b DSGVO.</p>
      </div> 


      {/* 3 Hoster */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>3 Hoster</b></h2>
        {/* 3.1 Hostinger */} 
        <h3 className="text-lg"><b>3.1 Hostinger</b></h3>  
        <p>Unsere Website wird im Internet von einem Dienstleister (Provider oder Hoster) zum Abruf bereitgestellt. Wir nutzen hierfür den Dienst der Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Zypern.</p>
        <p>Wir haben mit unserem Provider einen Auftragsverarbeitungsvertrag abgeschlossen. Danach ist unser Provider verpflichtet, Ihre Daten nur in unserem Auftrag und nach unserer Weisung zu verarbeiten.</p>
        <p>Weitergehende Informationen zur Datenverarbeitung bei unserem Provider finden Sie in dessen <a target="_blank" rel="noopener noreferrer" href="https://www.hostinger.com/de/legal/datenschutz-bestimmungen">Datenschutzerklärung</a>.</p>
        <p>Rechtsgrundlage für diese Datenverarbeitung sind zum einen unsere berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO an der Bereitstellung und Nutzung unserer Website im Internet sowie – soweit einschlägig – auch die gesetzliche Erlaubnis zur Speicherung von Daten im Rahmen der Anbahnung eines Vertragsverhältnisses gem. Art. 6 Abs. 1 lit. b DSGVO.</p>
        <p>Unser Provider verarbeitet bei jeder Nutzung dieser Website Informationen, die sog. Server Log Dateien, die automatisch bei jedem Aufruf von Websites im Internet von Ihrem Browser übermittelt werden. Dies sind:</p>
        <ul className="list-disc px-5">
          <li>Ihre IP-Adresse</li>
          <li>Typ und Version Ihres Browsers</li>
          <li>Hostname</li>
          <li>Besuchszeitpunkt</li>
          <li>die Website, von der aus Sie unsere Website besucht haben</li>
          <li>Name der aufgerufenen Website</li>
          <li>genauer Zeitpunkt des Aufrufes sowie</li>
          <li>die übertragene Datenmenge</li>
        </ul>
        <p>Diese Daten werden nur für statistische Zwecke verwendet und ermöglichen uns keine Identifikation von Ihnen als Nutzer.</p>
      </div>  

 
      {/* 4 Werbung */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>4 Werbung</b></h2>
        <p>Vor der Zusendung von Werbung werden wir Sie, soweit es nicht um die Werbung für ähnliche Produkte geht, die Sie bereits erworben haben, um Ihre explizite Einwilligung nach Maßgabe von Art. 4 Nr. 11 DSGVO bitten. Dies erfolgt insbesondere, wenn Sie uns die Einwilligung zur Zusendung unseres Newsletters geben oder ein Kontaktformular ausfüllen. Sie können Ihre Einwilligung nach Maßgabe des nachfolgenden Punktes „Einwilligung“ jederzeit widerrufen. SOWEIT WIR IHRE PERSONENBEZOGENEN DATEN VERWENDEN, UM DIREKTWERBUNG ZU BETREIBEN, KÖNNEN SIE DER VERWENDUNG IHRER DATEN FÜR DIESEN ZWECK EBENFALLS JEDERZEIT WIDERSPRECHEN. DIES KANN ETWA ÜBER JEDE UNSERER KONTAKTMÖGLICHKEITEN, INSBESONDERE FORMLOSE MAIL AN DIE IM IMPRESSUM GENANNTE MAIL ADRESSE ERFOLGEN. WIR WERDEN IHRE DATEN DANN NICHT MEHR FÜR DIREKTWERBUNG VERWENDEN.</p>
      </div> 
      

      {/* 5 Erstkontakt durch elektronische Anfrage */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>5 Erstkontakt durch elektronische Anfrage</b></h2>
         <p>Kontaktieren Sie uns in elektronischer Form (z. B. E-Mail, Fax, Telefon, Messenger, etc.), speichern und verarbeiten wir die Daten, die Sie uns bekannt gegeben haben (z. B. Name, Kontaktinformationen, Inhalt der Anfrage). Rechtsgrundlage dafür ist unser berechtigtes Interesse an effektiver Kundenkommunikation gem. Art. 6 Abs. 1 lit. a DSGVO und, soweit es um eine Anfrage zur Eingehung oder Erfüllung eines Vertrages geht, auch Art. 6 Abs. 1 lit. b DSGVO.</p>
        <p>Diese Daten werden wir an Dritte nur weitergeben, soweit es (nach Art. 6 Abs. 1 lit. b DSGVO) für die Erfüllung des Vertrages erforderlich ist, dies dem überwiegenden Interesse an einer effektiven Leistung (gem. Art. 6 Abs. 1 lit. f DSGVO) entspricht oder Ihre Einwilligung (nach Art. 6 Abs. 1 lit. a DSGVO) oder eine sonstige gesetzliche Erlaubnis oder Pflicht vorliegt.</p>
        <p>Sie können von uns jederzeit unentgeltlich Auskunft über Zweck der Verarbeitung, Herkunft und ggf. Empfänger Ihrer personenbezogenen Daten verlangen. Weiter können Sie die Berichtigung, die Löschung und die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten geltend machen. Sie können jederzeit Widerspruch gegen die (weitere) Verarbeitung Ihrer Daten erheben und haben ein Recht auf Datenübertragbarkeit sowie ein Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde.</p>
        <p>Ihre Daten bleiben grundsätzlich nur so lange gespeichert, wie es der Zweck der jeweiligen Datenverarbeitung erfordert. Eine weitergehende Speicherung kommt vor allem in Betracht, wenn dies zur Rechtsverfolgung oder aus berechtigten Interessen noch erforderlich ist oder eine gesetzliche Pflicht besteht, die Daten noch aufzubewahren (z. B. steuerliche Aufbewahrungsfristen, Verjährungsfrist).</p>
      </div> 

       {/* 6 Einwilligung */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>6 Einwilligung</b></h2>
        <p>Soweit wir Sie um Ihre Einwilligung bitten, Ihre Daten zu verarbeiten, werden wir Sie in klarer Sprache und leicht zugänglich darüber informieren, für welche Fälle Sie Ihre Einwilligung erteilen. Jede von uns erbetene Einwilligung ist freiwillig, jeden Vorteil, den Sie durch die Erteilung einer Einwilligung erlangen möchten, können Sie auch ohne die Einwilligung bekommen, fragen Sie uns einfach.</p>
        <p>Für jede Einwilligung gilt, dass Sie das Recht haben, jederzeit eine uns erteilte Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten zu widerrufen. Dies kann durch eine formlose Mitteilung erfolgen, z. B. über unser Kontaktformular, eine E-Mail an die im Impressum angegebene E-Mail-Adresse oder einen Abmeldelink (soweit von uns angeboten). Ihr Widerruf berührt die Rechtmäßigkeit der bis dahin vorgenommenen Datenverarbeitung nicht.</p>
      </div> 

      {/* 7 Speicherdauer */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>7 Speicherdauer</b></h2>
        <p>Ihre Daten bleiben grundsätzlich nur so lange gespeichert, wie es der Zweck der jeweiligen Datenverarbeitung erfordert. Eine weitergehende Speicherung kommt vor allem in Betracht, wenn dies zur Rechtsverfolgung durch uns oder aus unseren sonstigen berechtigten Interessen noch erforderlich ist.</p>
        <p>Für Ihre Bestandsdaten, die zur Erfüllung eines (auch unentgeltlichen) Vertragsverhältnisses erforderlich waren, bedeutet das, dass wir diese bis zur vollständigen Erfüllung oder Beendigung des Vertragsverhältnisses zuzüglich der Verjährungsfrist (die generell 2 oder 3 Jahre beträgt) nebst einem angemessenen Aufschlag für eine eventuelle Unterbrechung der Verjährung speichern.</p>
        <p>Für Ihre Nutzungsdaten, die anlässlich Ihrer Nutzung der Website erfasst wurden, bedeutet das, dass wir diese nur so lange speichern, wie dies für die ordnungsgemäße Funktion unserer Website noch erforderlich ist und unser berechtigtes Interesse reicht. Statistische Angaben werden wir in erster Linie nur pseudonymisiert speichern.</p>
        <p>Darüber hinaus speichern wir Ihre Daten noch, soweit wir dazu gesetzlich verpflichtet sind. Das sind insbesondere die steuerlichen Aufbewahrungsfristen, die grundsätzlich 6 oder gar 10 Jahre betragen.</p>  
      </div>   

      {/* 8 Weitergabe der Daten */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>8 Weitergabe der Daten</b></h2>
        <p>Wir mögen Spam genauso wenig wie Sie. Wir werden daher Ihre Daten nicht an Dritte weitergeben, soweit dies nicht gesetzlich erlaubt ist.</p>
        <p>Eine Weitergabe Ihrer Daten kann entweder:</p>
        <ul className="list-disc px-5">
          <li>für die Erfüllung eines Vertrages erforderlich und dann nach Art. 6 Abs. 1 lit. b DSGVO erlaubt sein oder</li>
          <li>auf Grundlage unseres berechtigten Interesses an einer effektiven Leistungsgestaltung gem. Art. 6 Abs. 1 lit. f DSGVO erlaubt sein,</li>
          <li>von einer von Ihnen erteilten Einwilligung gedeckt sein oder</li>
          <li>notwendig werden, wenn wir gem. Art. 6 Abs. 1 lit. c DSGVO von einem Staat oder einer Behörde rechtmäßig auf Herausgabe Ihrer Daten in Anspruch genommen werden.</li>
        </ul>
        <p>Soweit Ihre Daten an Dritte weiter gegeben werden, ist das in dieser Datenschutzerklärung aufgeführt.</p>
      </div>  

      {/* 9 Rechte der Nutzer */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>9 Rechte der Nutzer</b></h2>
        <p>Sie können von uns jederzeit kostenfrei Auskunft über die von uns über Sie gespeicherten personenbezogenen Daten verlangen. Hierbei wird zur Verhinderung von Missbrauch eine Identifikation Ihrer Person erforderlich.</p>

        <h3 className="text-lg"><b>9.1 Löschung, Berichtigung, Einschränkung</b></h3>
        <p>Sie können von uns jederzeit Berichtigung (auch durch Ergänzung) unrichtiger Daten verlangen sowie eine Einschränkung ihrer Verarbeitung oder auch die Löschung Ihrer Daten. Dies gilt insbesondere, wenn der Verarbeitungszweck erloschen ist, eine erforderliche Einwilligung widerrufen wurde und keine andere Rechtsgrundlage vorliegt oder unsere Datenverarbeitung unrechtmäßig ist. Wir werden Ihre personenbezogenen Daten dann im gesetzlichen Rahmen unverzüglich berichtigen, sperren oder gar löschen.</p>
     
        {/* 9.2 Widerspruch */}
        <h3 className="text-lg"><b>9.2 Widerspruch</b></h3>
        <p>JEDER VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN, DIE WIR AUF EINE ABWÄGUNG MIT IHREN INTERESSEN NACH ART. 6 ABS. 1 lit. f DSGVO STÜTZEN, KÖNNEN SIE JEDERZEIT WIDERSPRECHEN, WENN DAFÜR GRÜNDE BESTEHEN, DIE SICH AUS IHRER BESONDEREN PERSÖNLICHEN SITUATION ERGEBEN. WIR VERARBEITEN IHRE DATEN DANN NICHT MEHR, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE DIE INTERESSEN, RECHTE UND FREIHEITEN VON IHNEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN UNSERERSEITS.</p>
      
        {/* 9.3 Datenübertragung */}
        <h3 className="text-lg"><b>9.3 Datenübertragung</b></h3>
        <p>Sie können von uns die Übertragung der zu Ihrer Person gespeicherten Daten in maschinenlesbarer Form verlangen.</p>

        {/* 9.4 Beschwerde */}
        <h3 className="text-lg"><b>9.4 Beschwerde</b></h3>
        <p>Soweit Sie sich durch unsere Datenverarbeitung in Ihren Rechten verletzt fühlen, können Sie bei der zuständigen Aufsichtsbehörde (<a target="_blank" rel="noopener noreferrer" href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html">hier</a> finden Sie eine Liste der Behörden) eine Beschwerde einreichen.</p>
      </div>    

      {/* 10 Änderung der Datenschutzerklärung */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>10 Änderung der Datenschutzerklärung</b></h2>
        <p>Sofern einmal eine Änderung der Datenschutzerklärung aus rechtlichen oder tatsächlichen Gründen erforderlich wird, werden wir diese Seite entsprechend aktualisieren. Dabei werden keine Änderungen an den vom Nutzer erteilten Einwilligungen vorgenommen.</p>
      </div>

      {/* 11 Dateneingaben */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>11 Dateneingaben</b></h2>
        <p>In unserer mobilen App werden spezifische Gesundheitsdaten verarbeitet, um dem Nutzer eine Übersicht über seine körperliche Aktivität zu ermöglichen.</p>
   
        {/* 11.1 Verschlüsselung */}
        <h3 className="text-lg"><b>11.1 Verschlüsselung</b></h3>
        <p>Wenn Sie auf unserer Website Daten eingeben, sei es auf einem Kontaktformular, anlässlich einer Registrierung, des Einloggens oder für Zahlungszwecke, ist die Webseite, auf der Sie die Daten eingeben, verschlüsselt. Dadurch können Dritte nicht mitlesen, welche Daten Sie eingeben. Sie erkennen die Verschlüsselung an dem Schlosssymbol in Ihrem Browser und daran, dass die Adresszeile mit „https“ anstatt nur mit „http“ beginnt.</p>

        {/* 11.2 Kontaktformular */}
        <h3 className="text-lg"><b>11.2 Kontaktformular</b></h3>
        <p>Füllen Sie ein Kontaktformular aus oder senden Sie uns eine Mail oder eine sonstige elektronische Nachricht, werden Ihre Angaben für die Bearbeitung der Anfrage, mögliche Anschlussfragen oder damit zusammenhängende weitere Fragen, gespeichert und nur im Rahmen der Anfrage verwendet.</p>
        <p>Die Eingabe Ihrer Daten erfolgt verschlüsselt, dadurch können Dritte Ihre Daten anlässlich der Eingabe selbst dann nicht mitlesen, wenn sie Zugriff auf das Netzwerk haben (z.B. in ungeschützten öffentlichen W-LANs).</p>
        <p>Grundlage für diese Speicherung ist unser berechtigtes Interesse an Kommunikation mit interessierten Nutzern nach Art. 6 Abs. 1 lit. f DSGVO und bei Vertragsanfragen auch die Speicherung von Vertragsdaten gem. Art. 6 Abs. 1 lit. b DSGVO.</p>
        <p>Ihre Daten bleiben gespeichert, solange es die Bearbeitung der Anfrage erfordert, insbesondere die Speicherung noch zur Vertragserfüllung-/abwicklung, zur Rechtsverfolgung durch uns oder aus unseren sonstigen berechtigten Interessen noch erforderlich ist oder wir gesetzlich gehalten sind, Ihre Daten noch aufzubewahren (z.B. im Rahmen steuerlicher Aufbewahrungsfristen).</p>

        {/* 11.3 Registrierungen */}
        <h3 className="text-lg"><b>11.3 Registrierungen</b></h3>
        <p>Registrieren Sie sich auf unserer Website, erfragen wir verpflichtende und ggf. nicht verpflichtende Daten entsprechend unserem Registrierungs-Formular zu den nachfolgend angegebenen Zwecken.</p>
        <p>Die Eingabe Ihrer Daten erfolgt verschlüsselt, dadurch können Dritte Ihre Daten anlässlich der Eingabe nicht mitlesen.</p>
        <p>Grundlage für diese Speicherung ist unser berechtigtes Interesse an Kommunikation mit interessierten Nutzern nach Art. 6 Abs. 1 lit. f DSGVO und bei – auch unentgeltlichen – Verträgen auch die Speicherung von Vertragsdaten gem. Art. 6 Abs. 1 lit. b DSGVO.</p>
        <p>Ihre Daten bleiben gespeichert, solange die Registrierung andauert, insbesondere die Speicherung noch zur Vertragserfüllung-/abwicklung, zur Rechtsverfolgung durch uns oder aus unseren sonstigen berechtigten Interessen noch erforderlich ist oder wir gesetzlich gehalten sind, Ihre Daten noch aufzubewahren (z.B. im Rahmen steuerlicher Aufbewahrungsfristen).</p>
      </div> 

      {/* 12 Erhebung von Gesundheitsdaten */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>12 Gesundheitsdaten (Mobile App)</b></h2>
        <p>In unserer mobilen App werden spezifische Gesundheitsdaten verarbeitet, um dem Nutzer eine Übersicht über seine körperliche Aktivität zu ermöglichen.</p>

        {/* 12.1 Art und Quelle der Daten */}
        <h3 className="text-lg"><b>12.1 Art und Quelle der Daten</b></h3>
        <p>Wir erheben und verarbeiten ausschließlich die Anzahl Ihrer <b>Schritte</b>. Diese Daten werden über die Schnittstelle <b>Google Fit</b> (Google APIs) abgerufen. Der Zugriff erfolgt nur, sofern Sie der App explizit die Berechtigung dazu erteilt haben.</p>

        {/* 12.2 Verwendungszweck */}
        <h3 className="text-lg"><b>12.2 Verwendungszweck</b></h3>
        <p>Die Daten dienen der Darstellung des Schrittverlaufs innerhalb der App (Anzeige für den aktuellen Tag sowie Rückblicke auf die letzten 8 Tage und die letzten 8 Wochen). Grundlage für diese Verarbeitung ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p>

        {/* 12.3 Speicherung und Weitergabe */}
        <h3 className="text-lg"><b>12.3 Speicherung und Weitergabe</b></h3>
        <p>Wir speichern diese Gesundheitsdaten nicht in einer dauerhaften Datenbank und übertragen sie nicht an ein eigenes Backend oder externe Server. Die Verarbeitung erfolgt direkt zur Anzeige in der App auf Ihrem Endgerät. Eine Weitergabe der Schritte an Dritte findet nicht statt. Wir verwenden diese Daten nicht für Werbezwecke.</p>

        {/* 12.4 Fehleranalyse (Sentry) */}
        <h3 className="text-lg"><b>12.4 Fehleranalyse (Sentry)</b></h3>
        <p>Zur Verbesserung der App-Stabilität nutzen wir den Dienst Sentry. Im Falle eines App-Absturzes wird ein technischer Fehlerbericht (Crashlog) an Sentry übermittelt. Dieser Bericht enthält technische Geräteinformationen, jedoch ausdrücklich <b>keine</b> Gesundheitsdaten oder Informationen zu Ihren Schritten.</p>

        {/* 12.5 Speicherdauer */}
        <h3 className="text-lg"><b>12.5 Speicherdauer</b></h3>
        <p>Da die Daten nicht dauerhaft von uns gespeichert werden, endet der Zugriff, sobald die Berechtigung in den Systemeinstellungen entzogen oder die App deinstalliert wird.</p>
      </div>

      {/* 13 Speicherdauer */}
      <div className="stack-sm py-4" id="loeschung">
        <h2 className="text-xl"><b>13 Löschung von Kontodaten</b></h2>
        <p>Nutzer können die Löschung ihres Kontos und aller damit verbundenen Daten jederzeit anfordern.</p>
        
        <h3 className="text-lg"><b>13.1 Löschung über die App</b></h3>
        <p>Innerhalb der App steht Ihnen in den Kontoeinstellungen eine Funktion zur direkten Löschung Ihres Profils und Ihrer Daten zur Verfügung.</p>
        
        <h3 className="text-lg"><b>13.2 Manuelle Löschanfrage</b></h3>
        <p>Alternativ können Sie eine Anfrage auf Datenlöschung per E-Mail an <b>info@frederikkohler.de</b> senden. Wir werden Ihr Konto und alle zugehörigen Daten innerhalb der gesetzlichen Fristen dauerhaft entfernen.</p>
      </div>
    </div> 
  );
}  