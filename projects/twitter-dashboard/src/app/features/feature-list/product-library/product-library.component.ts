import { Component, ViewChild, ViewChildren, QueryList, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'product-library',
  templateUrl: './product-library.component.html',
  styleUrls: ['./product-library.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class ProductLibraryComponent {
  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Address>>;
  @ViewChild('paginator') paginator: MatPaginator;

  dataSource: MatTableDataSource<User>;
  usersData: User[] = [];
  columnsToDisplay = ['name', 'email', 'phone','town'];
  innerDisplayedColumns = ['street', 'zipCode', 'city'];
  expandedElement: User | null;
  selectedCompanyValue : string = "";
  selectedRegionValue :string="";
  selectedProductType:string="";
  selectedCountry:string="";
  lineOfBusiness:string="";
  selectedStatus:string="";
  epn:string="";
  opn:string="";
  occ:string="";
  scp:string="";
  isAdvancedSearch:boolean=false;
  companies : any = [
    {value:  "0", viewValue: "Swiss Re Management Ltd."},
    {value:  "1", viewValue: 'Swift Re'},
    {value:  "2", viewValue: 'Re-Insurance'}
  ];

  regions : any = [
    {value:  "asia", viewValue: "Asia"},
    {value:  "uk", viewValue: 'UK'},
    {value:  "aus", viewValue: 'Australia'},
    {value:  "usa", viewValue: 'USA'},
    {value:  "afr", viewValue: 'Africa'}
  ];

  productTypes : any = [
    {value:  "0", viewValue: "Swiss Re"},
    {value:  "1", viewValue: 'SwiftRe'},
    {value:  "2", viewValue: 'SwiftRe1.0'},
    {value:  "3", viewValue: 'SwiftRe2.0'},
    {value:  "4", viewValue: 'SwiftRe3.0'}
  ];
  businesses : any = [
    {value:  "0", viewValue: "Corporate"},
    {value:  "1", viewValue: 'Insurance'},
    {value:  "2", viewValue: 'Branding'},
    {value:  "3", viewValue: 'Construction'},
    {value:  "4", viewValue: 'Medical & Health'}
  ];
  statuses : any = [
    {value:  "0", viewValue: "Active"},
    {value:  "1", viewValue: 'Pending'},
    {value:  "2", viewValue: 'Waiting For Approval'},
    {value:  "3", viewValue: 'Completed'},
    {value:  "4", viewValue: 'Cancelled'}
  ];

  countries:any =[
    {value:  "0", viewValue: "India"},
    {value:  "1", viewValue: 'Switzerland'},
    {value:  "2", viewValue: 'United States of America'},
    {value:  "3", viewValue: 'United Kingdom'},
    {value:  "4", viewValue: 'Australia'}
  ]
  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    USERS.forEach(user => {
      if (user.addresses && Array.isArray(user.addresses) && user.addresses.length) {
        this.usersData = [...this.usersData, {...user, addresses: new MatTableDataSource(user.addresses)}];
      } else {
        this.usersData = [...this.usersData, user];
      }
    });
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.sort = this.sort;
  }

  toggleRow(element: User) {
    element.addresses && (element.addresses as MatTableDataSource<Address>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Address>).sort = this.innerSort.toArray()[index]);
  }

  searchSubmit(){
    console.log("search Submit click");
  }

  clearSearch(){
    this.selectedCompanyValue  = "";
    this.selectedRegionValue ="";
    this.selectedProductType="";
    this.selectedCountry="";
    this.lineOfBusiness="";
    this.selectedStatus="";
    this.epn=this.opn=this.occ=this.scp="";
  }

  applyFilter(filterValue: string) {
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Address>).filter = filterValue.trim().toLowerCase());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}

export interface User {
  name: string;
  email: string;
  phone: string;
  town:string;
  addresses?: Address[] | MatTableDataSource<Address>;
}

export interface Address {
  street: string;
  zipCode: string;
  city: string;
}

export interface UserDataSource {
  name: string;
  email: string;
  phone: string;
  town:string;
  addresses?: MatTableDataSource<Address>;
}

const USERS: User[] = [
  {
    name: "Mason",
    email: "mason@test.com",
    phone: "9864785214",
    town:"Machi",
    addresses: [
      {
        street: "Street 1",
        zipCode: "78542",
        city: "Kansas"
      },
      {
        street: "Street 2",
        zipCode: "78554",
        city: "Texas"
      }
    ]
  },
  {
    name: "Eugene",
    email: "eugene@test.com",
    phone: "8786541234",
    town:"Machi1234"
  },
  {
    name: "Jason",
    email: "jason@test.com",
    phone: "7856452187",
    town:"Machi1234",
    addresses: [
      {
        street: "Street 5",
        zipCode: "23547",
        city: "Utah"
      },
      {
        street: "Street 5",
        zipCode: "23547",
        city: "Ohio"
      }
    ]
  },
  {
    name: "Mason",
    email: "mason@test.com",
    phone: "9864785214",
    town:"Machi",
    addresses: [
      {
        street: "Street 1",
        zipCode: "78542",
        city: "Kansas"
      },
      {
        street: "Street 2",
        zipCode: "78554",
        city: "Texas"
      }
    ]
  },
  {
    name: "Eugene",
    email: "eugene@test.com",
    phone: "8786541234",
    town:"Machi1234"
  },
  {
    name: "Jason",
    email: "jason@test.com",
    phone: "7856452187",
    town:"Machi1234",
    addresses: [
      {
        street: "Street 5",
        zipCode: "23547",
        city: "Utah"
      },
      {
        street: "Street 5",
        zipCode: "23547",
        city: "Ohio"
      }
    ]
  },
  {
    name: "Mason",
    email: "mason@test.com",
    phone: "9864785214",
    town:"Machi",
    addresses: [
      {
        street: "Street 1",
        zipCode: "78542",
        city: "Kansas"
      },
      {
        street: "Street 2",
        zipCode: "78554",
        city: "Texas"
      }
    ]
  },
  {
    name: "Eugene",
    email: "eugene@test.com",
    phone: "8786541234",
    town:"Machi1234"
  },
  {
    name: "Jason",
    email: "jason@test.com",
    phone: "7856452187",
    town:"Machi1234",
    addresses: [
      {
        street: "Street 5",
        zipCode: "23547",
        city: "Utah"
      },
      {
        street: "Street 5",
        zipCode: "23547",
        city: "Ohio"
      }
    ]
  }
];