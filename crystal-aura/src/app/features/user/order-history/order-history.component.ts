import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-order-history',
    imports: [CommonModule, RouterModule],
    providers: [DatePipe],
    templateUrl: './order-history.component.html',
    styleUrl: './order-history.component.scss'
})
export class OrderHistoryComponent {
  orders = [
    { id: 'ORD001', date: new Date('2026-02-01'), items: [{ name: 'T-shirt', quantity: 2 }, { name: 'Sneakers', quantity: 1 }], total: 120.50, status: 'Completed' },
    { id: 'ORD002', date: new Date('2026-02-03'), items: [{ name: 'Hat', quantity: 1 }], total: 25.00, status: 'Pending' },
    { id: 'ORD003', date: new Date('2026-02-05'), items: [{ name: 'Jacket', quantity: 1 }], total: 85.75, status: 'Cancelled' },
    { id: 'ORD004', date: new Date('2026-02-06'), items: [{ name: 'Jeans', quantity: 1 }], total: 60.00, status: 'Completed' },
    { id: 'ORD005', date: new Date('2026-02-07'), items: [{ name: 'Shoes', quantity: 1 }, { name: 'Socks', quantity: 3 }], total: 90.50, status: 'Pending' },
    { id: 'ORD006', date: new Date('2026-02-08'), items: [{ name: 'Watch', quantity: 1 }], total: 150.00, status: 'Completed' },
    { id: 'ORD007', date: new Date('2026-02-09'), items: [{ name: 'Bag', quantity: 1 }], total: 75.00, status: 'Cancelled' },
    { id: 'ORD008', date: new Date('2026-02-10'), items: [{ name: 'T-shirt', quantity: 3 }], total: 45.00, status: 'Completed' },
    { id: 'ORD009', date: new Date('2026-02-11'), items: [{ name: 'Hat', quantity: 2 }], total: 50.00, status: 'Pending' },
    { id: 'ORD010', date: new Date('2026-02-12'), items: [{ name: 'Sneakers', quantity: 1 }], total: 80.00, status: 'Completed' },
    { id: 'ORD011', date: new Date('2026-02-13'), items: [{ name: 'Jacket', quantity: 2 }], total: 170.00, status: 'Cancelled' },
    { id: 'ORD012', date: new Date('2026-02-14'), items: [{ name: 'Jeans', quantity: 1 }, { name: 'Belt', quantity: 1 }], total: 85.00, status: 'Completed' },
    { id: 'ORD013', date: new Date('2026-02-15'), items: [{ name: 'Shoes', quantity: 2 }], total: 120.00, status: 'Pending' },
    { id: 'ORD014', date: new Date('2026-02-16'), items: [{ name: 'Socks', quantity: 5 }], total: 25.00, status: 'Completed' },
    { id: 'ORD015', date: new Date('2026-02-17'), items: [{ name: 'Hat', quantity: 1 }, { name: 'T-shirt', quantity: 1 }], total: 45.00, status: 'Cancelled' },
    { id: 'ORD016', date: new Date('2026-02-18'), items: [{ name: 'Backpack', quantity: 1 }], total: 65.00, status: 'Completed' },
    { id: 'ORD017', date: new Date('2026-02-19'), items: [{ name: 'Watch', quantity: 2 }], total: 300.00, status: 'Pending' },
    { id: 'ORD018', date: new Date('2026-02-20'), items: [{ name: 'Shoes', quantity: 1 }, { name: 'Socks', quantity: 2 }], total: 95.00, status: 'Completed' },
    { id: 'ORD019', date: new Date('2026-02-21'), items: [{ name: 'Jacket', quantity: 1 }], total: 85.75, status: 'Cancelled' },
    { id: 'ORD020', date: new Date('2026-02-22'), items: [{ name: 'Jeans', quantity: 2 }], total: 120.00, status: 'Completed' }
  ];


}
