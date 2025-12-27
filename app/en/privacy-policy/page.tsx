import type { Metadata } from "next"; 

export const metadata: Metadata = {
  title: "Frederik Kohler | Privacy Policy for Mobile Apps",
  description: "Privacy Policy for Mobile Apps",
};

export default function DataProtectionPage() {
  return (
    <div className="stack-sm">
      <h1 className="text-2xl">Privacy Policy</h1>
      <p>This page explains how we process personal data.</p>

      {/* 1 Responsible Entity */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>1 Responsible Entity</b></h2>
        <p>
          We are pleased about your visit to our website. First, we would like
          to introduce ourselves as the responsible entity within the meaning
          of data protection law:
        </p>
        <p>
          Frederik Kohler<br />
          Saderlacherweg 1<br />
          79761 Waldshut-Tiengen<br />
          Germany
        </p>
        <p>
          <a href="mailto:info@frederikkohler.com">
            info@frederikkohler.com
          </a>
        </p>
      </div>

      {/* 2 General Information */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>2 General Information</b></h2>
        <p>
          In accordance with our legal obligations, we inform you about the
          collection and use of your personal data.
        </p>
        <p>
          When you use our website, personal data about you may be collected.
          This can occur either when you actively provide data yourself (e.g.
          your email address) or automatically through our systems when you
          visit our website. This happens regardless of which device or software
          you use.
        </p>
        <p>
          Providing personal data is voluntary. There are no disadvantages for
          you if you choose not to provide data. However, certain services or
          contracts cannot be offered without specific information. Mandatory
          fields will be marked accordingly.
        </p>
        <p>
          On this website, personal data is processed only in accordance with
          applicable data protection laws, in particular the General Data
          Protection Regulation (GDPR). The technical terms used are defined in
          Article 4 GDPR.
        </p>
        <p>Under the GDPR, data processing is permitted in particular in the following cases:</p>
        <ul className="list-disc">
          <li>
            pursuant to Art. 6(1)(a) and Art. 7 GDPR, if you have given your
            consent to the processing of your data;
          </li>
          <li>
            pursuant to Art. 6(1)(b) GDPR, if the processing of your personal
            data is necessary for the initiation, conclusion, or performance
            of a contract;
          </li>
          <li>
            pursuant to Art. 6(1)(f) GDPR, if processing is necessary to protect
            our legitimate interests, such as analyzing, optimizing, and
            securing our website.
          </li>
        </ul>
      </div>

      {/* 2.1 Inventory Data */}
      <div className="stack-sm py-4">
        <h3 className="text-lg"><b>2.1 Inventory Data</b></h3>
        <p>
          We collect inventory data where it is necessary to establish,
          structure, or modify a contractual relationship. This may include
          customer data (e.g. name, address), contact details (e.g. email
          address, phone number), and service-related data.
        </p>
      </div>

      {/* 2.2 Usage Data */}
      <div className="stack-sm py-4">
        <h3 className="text-lg"><b>2.2 Usage Data</b></h3>
        <p>
          We also collect usage data to enable the use of our website. This may
          include visited pages, duration of visits, interests, content data,
          and metadata such as IP address or device identifiers.
        </p>
        <p>
          Usage data is only combined where required for billing purposes.
          Otherwise, it is processed pseudonymously unless you object.
        </p>
        <p>
          The legal basis for this processing is Art. 6(1)(f) GDPR (legitimate
          interest) and, where applicable, Art. 6(1)(b) GDPR.
        </p>
      </div>

      {/* 3 Hosting */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>3 Hosting</b></h2>
        <h3 className="text-lg"><b>3.1 Hostinger</b></h3>
        <p>
          Our website is hosted by Hostinger International Ltd., 61 Lordou
          Vironos Street, 6023 Larnaca, Cyprus.
        </p>
        <p>
          We have concluded a data processing agreement with our hosting
          provider, ensuring that your data is processed only according to our
          instructions.
        </p>
        <p>
          Further information can be found in Hostinger’s privacy policy:
          <a
            href="https://www.hostinger.com/de/legal/datenschutz-bestimmungen"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.hostinger.com/de/legal/datenschutz-bestimmungen
          </a>
        </p>
        <p>
          The legal basis for this processing is Art. 6(1)(f) GDPR and, where
          applicable, Art. 6(1)(b) GDPR.
        </p>
        <p>
          When accessing our website, the hosting provider processes server log
          files including:
        </p>
        <ul className="list-disc">
          <li>Your IP address</li>
          <li>Browser type and version</li>
          <li>Hostname</li>
          <li>Time of access</li>
          <li>Referring website</li>
          <li>Accessed page</li>
          <li>Exact access time</li>
          <li>Amount of transferred data</li>
        </ul>
        <p>
          This data is evaluated only for statistical purposes and does not
          allow identification of users.
        </p>
      </div>

      {/* 4 Advertising */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>4 Advertising</b></h2>
        <p>
          We will only send advertising communications with your explicit
          consent. You may withdraw your consent at any time. If your personal
          data is used for direct marketing purposes, you may object at any
          time.
        </p>
      </div>

      {/* 5 Initial Contact */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>5 Initial Contact via Electronic Inquiry</b></h2>
        <p>
          If you contact us electronically, we process the data you provide to
          handle your inquiry. The legal basis is Art. 6(1)(f) GDPR and, where
          contractual matters are involved, Art. 6(1)(b) GDPR.
        </p>
      </div>

      {/* 6 Consent */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>6 Consent</b></h2>
        <p>
          Any consent you provide is voluntary and may be withdrawn at any time
          without affecting the lawfulness of prior processing.
        </p>
      </div>

      {/* 7 Data Retention */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>7 Data Retention</b></h2>
        <p>
          Personal data is stored only as long as necessary for the respective
          purpose or as required by law.
        </p>
      </div>

      {/* 8 Data Disclosure */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>8 Disclosure of Data</b></h2>
        <p>
          We do not share personal data with third parties unless legally
          permitted or required.
        </p>
      </div>

      {/* 9 User Rights */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>9 User Rights</b></h2>
        <p>
          You have the right to access, rectify, erase, restrict processing,
          object to processing, and request data portability.
        </p>
      </div>

      {/* 10 Changes */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>10 Changes to this Privacy Policy</b></h2>
        <p>
          We may update this privacy policy if necessary. No changes will be
          made to previously granted consents.
        </p>
      </div>

      {/* 11 Data Entry */}
      <div className="stack-sm py-4">
        <h2 className="text-xl"><b>11 Data Entry</b></h2>

        <h3 className="text-lg"><b>11.1 Encryption</b></h3>
        <p>
          Data entered on our website is transmitted in encrypted form using
          HTTPS.
        </p>

        <h3 className="text-lg"><b>11.2 Contact Form</b></h3>
        <p>
          Data submitted via contact forms is processed solely to handle your
          request.
        </p>

        <h3 className="text-lg"><b>11.3 Registrations</b></h3>
        <p>
          Registration data is processed to provide the respective services
          and stored only as long as required.
        </p>
      </div>
    </div>
  );
}
