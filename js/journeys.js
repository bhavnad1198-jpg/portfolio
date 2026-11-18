/* Mother Dairy user journeys, transcribed from the original journey maps
   so every step stays readable at any screen size.
   Step: [title, description, actor, channel]. Branch: { when, from, to, steps }.
   The 3P Process Flow's descriptions are too small in the source to transcribe
   reliably, so only its step titles are given. */

const J_SG = 'Security Guard', J_AD = 'Admin', J_VE = 'Vendor', J_MD = 'Mother Dairy Employee', J_CT = 'Central Team, Mother Dairy';

export const MD_JOURNEYS = [
  {
    key: 'md-gate', name: 'Gate Entry', platform: 'Mobile app',
    summary: 'A security guard checks every transport at the plant gate against its document, with an exception route when details don’t match.',
    steps: [
      ['Log In', 'Security guard logs in using gate credentials.', J_SG, 'Mobile App'],
      ['Scan the QR Code', 'On the home screen, the security guard scans the QR code printed on the physical document, or manually enters a document ID if they are not able to scan the code.', J_SG, 'Mobile App'],
      ['Verify Physical Document', 'Security guard compares the physical, printed document with details shown in the mobile app.', J_SG, 'Offline'],
      ['Approve Request', 'If all the details match, the security guard submits the request as “pass-through”.', J_SG, 'Mobile App'],
      ['Upload Verification Proof', 'The security guard captures a photo as proof and lets the transport pass through the plant gate.', J_SG, 'Mobile App'],
      ['Log Out', 'The security guard logs out.', J_SG, 'Mobile App'],
    ],
    branches: [
      { when: 'If a mismatch occurs', from: 3, to: 5, steps: [
        ['Raise Exception', 'If the QR code scan results in a mismatch, the security guard raises an exception request.', J_SG, 'Mobile App'],
        ['View Exception Records', 'The admin can view the raised exception in the Outlook web application.', J_AD, 'Web App'],
        ['Review Exceptions', 'The admin approves the request, adds remarks, and confirms vehicle pass-through.', J_AD, 'Offline'],
        ['Allow Vehicle Pass-Through', 'The security guard views the admin-approved pass-through notification and allows vehicle entry.', J_SG, 'Mobile App'],
      ] },
    ],
  },
  {
    key: 'md-digichal', name: 'DigiChal', platform: 'Mobile app',
    summary: 'Consignment requests move from the Association Secretary to the Area In-charge for review, approval and transport, with rejection loops at each check.',
    steps: [
      ['Login', 'The Association Secretary opens the DigiChal mobile app, logs in with their credentials and lands on the homepage.', J_MD, 'Mobile App'],
      ['Create Consignment Request', 'The Association Secretary opens the Consignment screen, enters the consignment details including plant, area, vehicle number, auction type, dispatch date, PO number and time, and taps ‘Next’ to proceed.', J_MD, 'Mobile App'],
      ['Add Vendor and Item Details', 'On the vendor screen, the Association Secretary selects the vendor, item and pack size. Quantities for sorted items are auto-calculated, and additional items can be added.', J_MD, 'Mobile App'],
      ['Make Edits & View Summary', 'The Association Secretary can view the summary of the consignment request, make edits and submit for approval. Edits are allowed until final approval.', J_MD, 'Offline'],
      ['Review Approval', 'The Area In-charge opens the consignment listing screen to review all consignment requests and gives a review approval.', J_MD, 'Mobile App'],
      ['Approve Requests', 'From the consignment listing screen, the Area In-charge approves the consignment request, after which editing is not allowed.', J_MD, 'Mobile App'],
      ['Create Transport Request', 'The Area In-charge selects approved consignments, enters the transport request details (plant, area, route, vehicle type, transporter details and consignment type) and submits the request.', J_MD, 'Mobile App'],
      ['Approve Transport Request', 'The transport request goes for approval.', J_MD, 'Mobile App'],
    ],
    branches: [
      { when: 'If the review is rejected', from: 5, to: 4, steps: [] },
      { when: 'If the request is rejected', from: 6, to: 2, steps: [
        ['Reject Requests', 'If any issues are identified, the Area In-charge rejects the consignment request and provides the relevant remarks.', J_MD, 'Mobile App'],
      ] },
    ],
  },
  {
    key: 'md-vendor', name: 'Vendor Stocking', platform: 'Web app',
    summary: 'Vendors enter stock one form at a time or upload it in bulk; Mother Dairy’s central team sees a consolidated view across plants.',
    steps: [
      ['Log In', 'The vendor logs into the web portal using secure credentials.', J_VE, 'Web App'],
      ['View Listing Screen', 'The vendor lands on the listing page, where they can search, view activity logs and filter by date.', J_VE, 'Web App'],
      ['Create Stock Entries', 'The vendor clicks “Create stock entries” and fills in SKU-wise stock details such as month opening stock and day production.', J_VE, 'Web App'],
      ['Preview Stock Data', 'The vendor previews the uploaded stock data and views all SKU-related details.', J_VE, 'Web App'],
      ['Submit Stock Data', 'The vendor submits validated stock data.', J_VE, 'Web App'],
      ['View Consolidated Stock', 'Once consolidated, in the admin view of the listing page, the central team can view all consolidated uploads from vendors across plants, filter by date and download reports.', J_CT, 'Web App'],
    ],
    branches: [
      { when: 'Bulk upload instead of the form', from: 2, to: 4, steps: [
        ['Enter Stock Details', 'The vendor downloads the stock upload template from the portal and fills in SKU-wise stock details in the Excel template.', J_VE, 'Web App'],
        ['Upload Stock Data', 'The vendor uploads stock data in bulk using the Excel upload functionality.', J_VE, 'Web App'],
      ] },
      { when: 'In case of an error', from: 4, to: 5, steps: [
        ['Reupload Data', 'If there is an error, the vendor can re-upload the same file with corrections.', J_VE, 'Web App'],
      ] },
    ],
  },
  {
    key: 'md-itasset', name: 'IT Asset Acquisition', platform: 'Web app',
    summary: 'An employee’s request to acquire an IT asset passes through the Site IT In-Charge, Finance, the IT Head and Information Security before handover.',
    steps: [
      ['Log In', 'A Mother Dairy employee logs into the portal using secure company credentials.', J_MD, 'Web App'],
      ['Create Asset Request', 'The employee lands on the homepage and clicks “Create New Asset Request”.', J_MD, 'Web App'],
      ['Select Asset Type', 'The employee selects the asset type from the dropdown, reviews the calculated acquisition amount, and accepts the declaration and terms before proceeding.', J_MD, 'Web App'],
      ['Submit Request', 'The employee submits the IT Asset Acquisition request.', J_MD, 'Web App'],
      ['Review Request', 'The Site IT In-Charge reviews asset details, eligibility conditions and asset age.', J_MD, 'Web App'],
      ['Approve Request', 'If correctly assigned, the Site IT In-Charge approves the request for further processing.', J_MD, 'Web App'],
      ['Make Payments', 'The employee receives payment instructions via email, makes the payment and uploads a payment screenshot on the portal.', J_MD, 'Web App'],
      ['Update Payment Status', 'The Finance / Central Treasury team confirms payment receipt, checks the amount is credited against the invoice and updates the payment status.', J_MD, 'SAP ERP'],
      ['Approve Acquisition', 'On successful payment and confirmation from the Finance team, the IT Head reviews and approves the acquisition request.', J_MD, 'Web App'],
      ['Security Verification', 'The Information Security team verifies that device formatting is complete and no organisational data exists on the device, and adds remarks to confirm verification.', J_MD, 'Web App'],
      ['Asset Handover', 'On successful verification from the Security team, the Site IT In-Charge hands over the device to the employee and updates the status to “Handover Completed”.', J_MD, 'Web App'],
    ],
    branches: [
      { when: 'Employee changes their mind', from: 4, to: null, steps: [
        ['Withdraw Request', 'The employee can withdraw the request before payment completion.', J_MD, 'Web App'],
      ] },
      { when: 'If incorrectly assigned', from: 5, to: 6, steps: [
        ['Reassign Request', 'The IT In-Charge clicks “Reassign”, enters the correct IT In-Charge details, and the request is reassigned to the new IT In-Charge.', J_MD, 'Web App'],
      ] },
    ],
  },
  {
    key: 'md-warehouse', name: 'Warehouse Store', platform: 'Mobile & web app',
    summary: 'A dispatch travels from creation to GRN: the Central Team, Dispatch Team and Receiving Team each verify their part, with correction loops along the way.',
    steps: [
      ['Central Team Login', 'The Central Team logs in using their credentials and lands on the homepage, where they can see the list of existing dispatch requests.', J_MD, 'Web App'],
      ['Create Dispatch Request', 'They click “Create dispatch request” and select the movement type (primary or secondary), process type (STO / PO / SO) and process type number.', J_MD, 'Web App'],
      ['Add Vehicle and Transport Details', 'They add the vehicle and transport details, upload a blank LR copy and review the summary before clicking “Create dispatch request”.', J_MD, 'Web App'],
      ['Capture Driver Details and Vehicle Verification', 'Upon driver arrival, the Dispatch Team completes vehicle and OTP-based driver verification and the loading checklist, including gate entry validation and quality checks.', J_MD, 'Mobile App'],
      ['Submit Request for Central Team Verification', 'The Dispatch Team submits the request for Central Team verification.', J_MD, 'Mobile App'],
      ['Review Dispatch Request', 'On the web app, the Central Team reviews the request submitted by the Dispatch Team and verifies the information.', J_MD, 'Web App'],
      ['Complete Seal Process and Upload Documents', 'After Central Team approval, the Dispatch Team fills in the remaining details such as material details and additional information, completes the seal verification process and uploads documents.', J_MD, 'Mobile App'],
      ['Download and Hand Over Dispatch Documents', 'The Dispatch Team hands the printed documents to the driver. The transporter departs and begins the journey.', J_MD, 'Offline'],
      ['Review Dispatch Details and Upload Documents', 'Upon driver arrival at the receiving location, the Receiving Team completes the unloading checklist: gate entry validation, material verification and batch number generation, quality checks, damage checks, additional information capture and document upload.', J_MD, 'Mobile App'],
      ['Submit Request for Central Team Verification', 'The Receiving Team submits the request for the Central Team’s verification.', J_MD, 'Mobile App'],
      ['Review Receiving Request', 'On the web app, the Central Team reviews the request from the Receiving Team and verifies the information.', J_MD, 'Web App'],
      ['Create LECI and GRN', 'On approval by the Central Team, LECI is auto-created by SAP. In SAP, the Doc Creator creates the GRN and marks the request GRN Complete.', J_MD, 'Web App'],
    ],
    branches: [
      { when: 'On wrong vehicle entry', from: 4, to: 4, steps: [
        ['Incorrect Vehicle Entry at Dispatch Location', 'If an incorrect vehicle arrives, the Dispatch Team notes the reason for the vehicle change and reports it to the Central Team, who fill in the vehicle details and submit the request.', J_MD, 'Web App'],
      ] },
      { when: 'On rejection at dispatch', from: 6, to: 4, steps: [
        ['Reject Request for Correction', 'If corrections are needed, the Central Team user taps ‘Reject’ and adds their reason, and the request is reassigned for correction and resubmission.', J_MD, 'Web App'],
      ] },
      { when: 'On rejection at receiving', from: 11, to: 9, steps: [
        ['Reject Request', 'If rejected, the Central Team sends the request back to the Receiving Team for changes.', J_MD, 'Web App'],
      ] },
    ],
  },
  {
    key: 'md-3p', name: '3P Process Flow', platform: 'Plant process flow', titlesOnly: true,
    summary: 'Six third-party plant processes, from tanker intake to dispatch, each mapped as a sequence of steps.',
    flows: [
      ['Tanker Data Entry', ['Pre-requisite: Prepare the master data', 'Pre-requisite: Pre-enter dispatch data', 'Create Gate Entry', 'Post Material GRN', 'Update QA and Usage Decision', 'Weigh Tanker', 'Transfer to Unrestricted Stock']],
      ['Packing Material & Commodities GRN', ['Receive Material', 'Post Material GRN', 'Update QA and Usage Decision', 'Transfer to Unrestricted Stock']],
      ['Conversion of Raw Milk to Fat & SNF', ['Create Process Order', 'Confirm Process Order', 'Receive Fat and SNF', 'Issue Stock to Vendor']],
      ['Production of Finished Goods Materials', ['Create Scheduling Agreement', 'Receive Indent', 'Produce Finished Goods', 'Receive FG Stock', 'Create Sub-con Challan']],
      ['Production of Commodities Materials', ['Create Scheduling Agreement', 'Receive Production Data', 'Produce Commodities', 'Update QA and Usage Decision', 'Receive at Storage', 'Create Sub-con Challan']],
      ['Dispatch of Commodities to Warehouse', ['Receive Stock Transfer Note', 'Create Outbound Delivery', 'Create Billing Document', 'Print Billing Document', 'Send Invoice to Stores']],
    ],
  },
];

const jesc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const actorCls = a => (a === J_SG || a === J_VE ? 'jx-actor jx-actor--front' : a === J_AD ? 'jx-actor jx-actor--admin' : 'jx-actor');

function jxCard(s, n, prefix = '') {
  const [t, d, a, c] = s;
  return `<li class="jx-step"><span class="jx-n">${prefix}${String(n).padStart(2, '0')}</span><h4>${jesc(t)}</h4><p>${jesc(d)}</p><div class="jx-tags"><span class="${actorCls(a)}">${jesc(a)}</span><span class="jx-chan">${jesc(c)}</span></div></li>`;
}

export function journeyHTML(j, i) {
  const head = `<header class="jx-head"><div><p class="label">Journey ${String(i + 1).padStart(2, '0')} of 06 · ${jesc(j.platform)}</p><h3>${jesc(j.name)}</h3></div><p class="jx-sum">${jesc(j.summary)}</p>
    <button type="button" class="btn btn--ghost jx-orig" data-zoom="${j.key}" data-group="md-orig-${i}" data-cap="${jesc(j.name)}: original journey map" aria-label="View the original ${jesc(j.name)} journey map">View original map <span class="arr">↗</span></button></header>`;
  if (j.titlesOnly) {
    return `${head}<div class="jx-flows">${j.flows.map(([f, steps]) => `<div class="jx-flow"><h4>${jesc(f)}</h4><ol>${steps.map((s, k) => `<li><span class="jx-n">${String(k + 1).padStart(2, '0')}</span>${jesc(s)}</li>`).join('')}</ol></div>`).join('')}</div>
      <p class="jx-note">Step names are transcribed from the original map. Open it for the full detail.</p>`;
  }
  const main = `<p class="jx-lane label">Main path · ${j.steps.length} steps</p><ol class="jx-steps">${j.steps.map((s, k) => jxCard(s, k + 1)).join('')}</ol>`;
  const br = (j.branches || []).map(b => {
    const back = b.to ? `rejoins at step ${String(b.to).padStart(2, '0')} · ${jesc(j.steps[b.to - 1][0])}` : 'ends the request';
    return `<div class="jx-branch"><p class="jx-when"><span class="jx-fork" aria-hidden="true">↳</span><b>${jesc(b.when)}</b><span>from step ${String(b.from).padStart(2, '0')} · ${jesc(j.steps[b.from - 1][0])}, ${back}</span></p>
      ${b.steps.length ? `<ol class="jx-steps jx-steps--alt">${b.steps.map((s, k) => jxCard(s, k + 1, 'A')).join('')}</ol>` : ''}</div>`;
  }).join('');
  return head + main + (br ? `<p class="jx-lane label">Alternate paths</p>${br}` : '');
}
