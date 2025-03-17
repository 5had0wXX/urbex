// js/script.js

// Sample data for each category with at least 10 entries per category.
const data = {
  hospitals: [
    {
      name: "Vibra Healthcare",
      address: "1414 State Street",
      city: "Hartford",
      state: "CT",
      status: "For Sale / Abandoned",
      notes: "Urban exploration reports; verify latest status."
    },
    {
      name: "Cedarcrest Medical Center",
      address: "Russell Road",
      city: "Waterbury",
      state: "CT",
      status: "Recently Closed",
      notes: "Mentioned in local news; confirmation recommended."
    },
    {
      name: "Edgewood Hospital",
      address: "1000 King St",
      city: "Hartford",
      state: "CT",
      status: "Partially Abandoned",
      notes: "Some sections unused; check local records for details."
    },
    {
      name: "St. Mary's Hospital",
      address: "400 Main Street",
      city: "New Haven",
      state: "CT",
      status: "Recently Closed / For Sale",
      notes: "Historical closure noted; may be under redevelopment."
    },
    {
      name: "Franklin Medical Center",
      address: "22 Innovation Way",
      city: "Bridgeport",
      state: "CT",
      status: "For Sale",
      notes: "Broker data suggests market listing; verify details."
    },
    {
      name: "Newtown Regional Hospital",
      address: "789 Regional Ave",
      city: "Newtown",
      state: "CT",
      status: "Abandoned",
      notes: "Highlighted by historical society; may require verification."
    },
    {
      name: "Riverside Community Hospital",
      address: "85 River Road",
      city: "Albany",
      state: "NY",
      status: "For Sale",
      notes: "Listed on commercial real estate sites; confirmation advised."
    },
    {
      name: "Mercy Hospital",
      address: "200 Mercy Lane",
      city: "Springfield",
      state: "MA",
      status: "Recently Closed",
      notes: "State health department release referenced; recheck status."
    },
    {
      name: "Bayside Hospital",
      address: "123 Sea Breeze Avenue",
      city: "Providence",
      state: "RI",
      status: "Abandoned / For Sale",
      notes: "Urban exploration blogs mention; verify with records."
    },
    {
      name: "Liberty Medical Pavilion Hospital",
      address: "680 Liberty Blvd",
      city: "Boston",
      state: "MA",
      status: "For Sale",
      notes: "Listed in state real estate; requires confirmation."
    }
  ],
  industrial: [
    {
      name: "Oakwood Industrial Complex",
      address: "123 Oak Street",
      city: "Hartford",
      state: "CT",
      status: "Abandoned / For Sale",
      notes: "Mentioned in urban exploration write-ups; redevelopment potential noted."
    },
    {
      name: "Heritage Warehouse",
      address: "88 Commerce Blvd",
      city: "New Haven",
      state: "CT",
      status: "For Sale",
      notes: "Listed on commercial real estate sites; double-check current listings."
    },
    {
      name: "Granite Mill Facility",
      address: "250 Granite Street",
      city: "Worcester",
      state: "MA",
      status: "For Sale",
      notes: "Visible on multiple real estate platforms; verify details."
    },
    {
      name: "Riverview Depot",
      address: "900 Depot Road",
      city: "New Haven",
      state: "CT",
      status: "Abandoned / For Sale",
      notes: "Old rail facility repurposed on listings; verify condition."
    },
    {
      name: "Metro Industrial Park",
      address: "500 Industrial Way",
      city: "Stamford",
      state: "CT",
      status: "For Sale",
      notes: "Broker listings indicate redevelopment opportunity."
    },
    {
      name: "Riverfront Logistics Hub",
      address: "77 Gateway Road",
      city: "Bridgeport",
      state: "CT",
      status: "For Sale",
      notes: "Strategically located; check official records for status."
    },
    {
      name: "Central Manufacturing Plant",
      address: "300 Factory Lane",
      city: "New Brunswick",
      state: "NJ",
      status: "Recently Closed",
      notes: "Former plant under evaluation for redevelopment."
    },
    {
      name: "Techno Industrial Center",
      address: "450 Silicon Ave",
      city: "Newark",
      state: "NJ",
      status: "For Sale",
      notes: "Hints at modern repurposing; confirm with brokers."
    },
    {
      name: "Legacy Industrial Estate",
      address: "350 Heritage Road",
      city: "Providence",
      state: "RI",
      status: "Abandoned",
      notes: "Historical estate; local reports needed."
    },
    {
      name: "Southside Distribution Center",
      address: "600 Depot Street",
      city: "Philadelphia",
      state: "PA",
      status: "For Sale",
      notes: "Potential redevelopment site; review broker listings."
    }
  ],
  educational: [
    {
      name: "Old Maple School",
      address: "45 Maple Avenue",
      city: "Bridgeport",
      state: "CT",
      status: "Recently Closed / Abandoned",
      notes: "Cited in heritage reports; verify with municipal records."
    },
    {
      name: "Greenwood High School",
      address: "200 Elm Street",
      city: "Hartford",
      state: "CT",
      status: "Abandoned",
      notes: "Unused building for years; noted by urban explorers."
    },
    {
      name: "Central Tech Institute",
      address: "310 Tech Drive",
      city: "New Haven",
      state: "CT",
      status: "For Sale",
      notes: "Former vocational school; check broker listings."
    },
    {
      name: "Riverside Community College",
      address: "400 College Way",
      city: "Springfield",
      state: "MA",
      status: "For Sale",
      notes: "Property on market; further research advised."
    },
    {
      name: "Northside Academy",
      address: "1200 North Ave",
      city: "Worcester",
      state: "MA",
      status: "Recently Closed",
      notes: "Local education records indicate closure."
    },
    {
      name: "Hillcrest University Annex",
      address: "89 University Blvd",
      city: "Providence",
      state: "RI",
      status: "Abandoned",
      notes: "Part of a larger institution; condition to be verified."
    },
    {
      name: "Cedarwood Elementary",
      address: "67 Cedar Lane",
      city: "Waterbury",
      state: "CT",
      status: "Recently Closed",
      notes: "Community reports suggest disuse; verify via local records."
    },
    {
      name: "Southtown Preparatory School",
      address: "560 South Street",
      city: "Newark",
      state: "NJ",
      status: "For Sale",
      notes: "Broker indicates transition; verify market status."
    },
    {
      name: "Elmwood Vocational School",
      address: "800 Elmwood Road",
      city: "Philadelphia",
      state: "PA",
      status: "Abandoned",
      notes: "Former vocational facility; check local historical societies."
    },
    {
      name: "Lakeside High Laboratory",
      address: "350 Lakeside Dr",
      city: "Boston",
      state: "MA",
      status: "Recently Closed",
      notes: "District records confirm closure; redevelopment under review."
    }
  ],
  hospitality: [
    {
      name: "Liberty Hotel",
      address: "77 Ocean Drive",
      city: "Providence",
      state: "RI",
      status: "Abandoned",
      notes: "Urban explorers note deterioration; status subject to change."
    },
    {
      name: "Grandview Resort",
      address: "900 Lakeview Road",
      city: "Hartford",
      state: "CT",
      status: "For Sale",
      notes: "Listed on hospitality sites; confirm current market conditions."
    },
    {
      name: "Sunset Motel",
      address: "345 Sunset Blvd",
      city: "New York",
      state: "NY",
      status: "Abandoned / For Sale",
      notes: "Former motel with redevelopment potential."
    },
    {
      name: "Riverside Inn",
      address: "123 River Street",
      city: "Albany",
      state: "NY",
      status: "For Sale",
      notes: "Seen in local broker listings; requires verification."
    },
    {
      name: "Bayview Lodge",
      address: "88 Seaside Ave",
      city: "New Haven",
      state: "CT",
      status: "Recently Closed",
      notes: "Historical property per local archives."
    },
    {
      name: "Elmwood Resort & Spa",
      address: "456 Elm Street",
      city: "Bridgeport",
      state: "CT",
      status: "For Sale",
      notes: "Potential boutique resort project; verify with brokers."
    },
    {
      name: "Heritage Hotel",
      address: "232 Heritage Way",
      city: "Boston",
      state: "MA",
      status: "Abandoned",
      notes: "Part of an old chain; verify condition locally."
    },
    {
      name: "Crestview Inn",
      address: "333 Crestview Rd",
      city: "Springfield",
      state: "MA",
      status: "For Sale",
      notes: "Recently closed; under market evaluation."
    },
    {
      name: "Central City Hotel",
      address: "500 Central Ave",
      city: "Philadelphia",
      state: "PA",
      status: "For Sale",
      notes: "Listed by commercial agents; verify property condition."
    },
    {
      name: "Summit Lodge",
      address: "789 Mountain Road",
      city: "Burlington",
      state: "VT",
      status: "Recently Closed / Abandoned",
      notes: "Unique mountain resort; confirm with local municipality."
    }
  ],
  government: [
    {
      name: "Heritage Post Office",
      address: "101 Central Plaza",
      city: "Philadelphia",
      state: "PA",
      status: "Abandoned / For Sale",
      notes: "Noted in historical surveys; check local records."
    },
    {
      name: "City Municipal Building",
      address: "150 City Hall Ave",
      city: "New Haven",
      state: "CT",
      status: "For Sale",
      notes: "Relocated govt. operations; redevelopment possible."
    },
    {
      name: "Old Courthouse",
      address: "77 Justice Road",
      city: "Providence",
      state: "RI",
      status: "Abandoned",
      notes: "Historic building; verify historical significance."
    },
    {
      name: "Government Office Complex",
      address: "300 Government Lane",
      city: "Newark",
      state: "NJ",
      status: "For Sale",
      notes: "Due to downsizing; check with broker listings."
    },
    {
      name: "Federal Archives Center",
      address: "450 Archive Blvd",
      city: "Washington",
      state: "DC",
      status: "For Sale",
      notes: "Former government storage; verification needed."
    },
    {
      name: "State Department Building",
      address: "220 State Street",
      city: "Boston",
      state: "MA",
      status: "Recently Closed",
      notes: "Under reorganization; further details pending."
    },
    {
      name: "City Library Annex",
      address: "560 Book Street",
      city: "Albany",
      state: "NY",
      status: "Abandoned",
      notes: "Former annex; confirm current use or disuse."
    },
    {
      name: "Regional Health Administration",
      address: "95 Health Plaza",
      city: "Bridgeport",
      state: "CT",
      status: "For Sale",
      notes: "Large institutional property; broker data available."
    },
    {
      name: "Old Fire Station",
      address: "160 Firehouse Drive",
      city: "New Brunswick",
      state: "NJ",
      status: "Abandoned",
      notes: "Repurposing potential noted; check with local records."
    },
    {
      name: "Civic Center",
      address: "800 Civic Center Way",
      city: "Philadelphia",
      state: "PA",
      status: "For Sale / Abandoned",
      notes: "Frequently listed in redevelopment plans; verify with municipal announcements."
    }
  ]
};

// Set up the event listener on DOM ready.
document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.getElementById("categorySelect");
  const tableContainer = document.getElementById("tableContainer");

  categorySelect.addEventListener("change", function () {
    const selectedCategory = this.value;
    if (selectedCategory && data[selectedCategory]) {
      tableContainer.innerHTML = generateTable(data[selectedCategory]);
    } else {
      tableContainer.innerHTML = "";
    }
  });
});

// Generates an HTML table from an array of property objects.
function generateTable(categoryData) {
  let tableHTML = `<table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Facility Name</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Status</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>`;

  categoryData.forEach((item) => {
    tableHTML += `<tr>
      <td>${item.name}</td>
      <td>${item.address}</td>
      <td>${item.city}</td>
      <td>${item.state}</td>
      <td>${item.status}</td>
      <td>${item.notes}</td>
    </tr>`;
  });

  tableHTML += `</tbody></table>`;
  return tableHTML;
}