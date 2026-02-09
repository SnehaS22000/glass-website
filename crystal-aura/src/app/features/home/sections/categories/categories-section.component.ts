import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../../../core/models/categories.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss'
})
export class CategoriesSectionComponent {
  categories = signal<Category[]>([
    { id: '1', name: 'Vases', count: '12 Unique Pieces', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-OnLni1w_y3bh4OahRxEwBh7E5MFxEj22SBzAvw53SymzTv2WpfU2qqDTLkTNuUGPHLNSwAH5HyFC2roScf_5XvlaB022NqiTJPK9enOSgn1MbRXJ6gKyp6QVWYy6lDAC4h4ku66YA6NY9Yr5iKrQR41jg8Mwhn1Ul951Q_ITmBbEJ8YlGm9v_k6n6F7SXINErM0n6Now5lZJ8VIGVHIoRIowTMEgzjqZ8xwOTX93HdjhJD-km3kgojalBgJjLfnQX2Z7O-tiA70' },
    { id: '2', name: 'Sculptures', count: '8 Masterpieces', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBHopGHqsxuKqImAR8iM2SouLgA5Hgf3RDHM0KN5tBhPDzIzgn7yb0l-pBamvf3U1jihtckgItS2jSd7KQOXye3gG-A2g4x8ZkCVPJFRwy4OQYQQrtyk5ddcMGIVJuaFAPr-F8xtBkL6MeIkH21heT-u25ZXX8IZQr_n05Q-qC59YEszRMZ_Y8Kb6U5JbnOC9mp2S7tOjYlCXOMpPzoPk_W2eCLz6_15W4vmCGN34yZ-o-Wg0j4kTBJWBPdmLdudHwC1jzUl6-RA0' },
    { id: '3', name: 'Decorative Items', count: '24 Items', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACB5POwg2-sGaBPsCjKi-vll8ex6o9zFBvIy96WohUWJQTDOkhOgOkFZGk-gnKVYwsOItMIEUDIPluIvEuE2D-z63lGbgFafDmVo27oMJ73OEUaVS3J5uXuCCXQz7xY6iPtvOt3v-tiAQ2TMViGJwmop-UU01yhiBvk7k5SXEplwk_VYXTpz9yzitq_gxtagukZdOJFmFbd0wH26t1-olAr4XGJ8yDyk59UMhh4-4ZCQF3x7eEdswhto_f7fE2tF_h4YZ1wEZkjNg' },
  ]);
}
