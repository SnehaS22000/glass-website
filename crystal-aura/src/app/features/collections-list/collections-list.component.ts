import { Component, signal } from '@angular/core';
import { Collection } from '../../core/models/collections.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-collections-list',
    imports: [CommonModule, RouterModule],
    templateUrl: './collections-list.component.html',
    styleUrl: './collections-list.component.scss'
})
export class CollectionsListComponent {
  collections = signal<Collection[]>([
    {
      id: '1',
      name: 'Vases',
      shortName: 'Vases',
      description: 'Organic forms designed to hold nature\'s beauty in vibrant hues.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-OnLni1w_y3bh4OahRxEwBh7E5MFxEj22SBzAvw53SymzTv2WpfU2qqDTLkTNuUGPHLNSwAH5HyFC2roScf_5XvlaB022NqiTJPK9enOSgn1MbRXJ6gKyp6QVWYy6lDAC4h4ku66YA6NY9Yr5iKrQR41jg8Mwhn1Ul951Q_ITmBbEJ8YlGm9v_k6n6F7SXINErM0n6Now5lZJ8VIGVHIoRIowTMEgzjqZ8xwOTX93HdjhJD-km3kgojalBgJjLfnQX2Z7O-tiA70'
    },
    {
      id: '2',
      name: 'Sculptures',
      shortName: 'Sculptures',
      description: 'One-of-a-kind centerpieces that redefine your living space.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBHopGHqsxuKqImAR8iM2SouLgA5Hgf3RDHM0KN5tBhPDzIzgn7yb0l-pBamvf3U1jihtckgItS2jSd7KQOXye3gG-A2g4x8ZkCVPJFRwy4OQYQQrtyk5ddcMGIVJuaFAPr-F8xtBkL6MeIkH21heT-u25ZXX8IZQr_n05Q-qC59YEszRMZ_Y8Kb6U5JbnOC9mp2S7tOjYlCXOMpPzoPk_W2eCLz6_15W4vmCGN34yZ-o-Wg0j4kTBJWBPdmLdudHwC1jzUl6-RA0'
    },
    {
      id: '3',
      name: 'Decorative Items',
      shortName: "Decor",
      description: 'Small accents that make a big impact on your interior aesthetic.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACB5POwg2-sGaBPsCjKi-vll8ex6o9zFBvIy96WohUWJQTDOkhOgOkFZGk-gnKVYwsOItMIEUDIPluIvEuE2D-z63lGbgFafDmVo27oMJ73OEUaVS3J5uXuCCXQz7xY6iPtvOt3v-tiAQ2TMViGJwmop-UU01yhiBvk7k5SXEplwk_VYXTpz9yzitq_gxtagukZdOJFmFbd0wH26t1-olAr4XGJ8yDyk59UMhh4-4ZCQF3x7eEdswhto_f7fE2tF_h4YZ1wEZkjNg'
    },
    {
      id: '4',
      name: 'Abstract Art',
      shortName: 'Art',
      description: 'Elevate every sip with artisan tumblers and wine glasses.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsgx79orssvl2omthpMOwCflduijT1rjkJ3Xa16W_3tTt087Je0K27jFQ6MXC5rkiOuDsQt3fLdr9VHEUCU-Depr0JoybJZHcxfdLhId9lI6zznLrHXTP-LZpzFNikBLx1HjU-CbpeTemABF95IXcSiwW90PpSJyNUV-0qFk-SeTkZUN5u5EzdtqdMG8GFx9dy840dkqO-PwzZ892xjPuHromX1Ki18PUhWZQ7b6DRH1e6eTfwM--sMDMdsb0mZ5wJkNW129TObD8'
    },
    {
      id: '5',
      name: 'Limited Edition',
      shortName: 'Art',
      description: 'Pure expressions of light, shadow, and prismatic distortion.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJz3BVQQ1ExLKET330oZUhi5-PRahhuMTWfUGoVK6ld3VFqT51Tw4PRgGfcX4B72LevDAUlH3oUccCf12wOcp1JZ8cd-zys74ibLdxa9ox0mFiwuufrAgVXG5uSGHOx9DDihfLIDQG6zRu0An1x8ScBR47Yemh8hV1benl9B8TdtpUJKMHheTN03Kp-YKwIu_MvzTdiRa88FQ3ykPp9czfLbnUc0WDIzIxV-cY-DO93rEsrDGWoxslT3zOcAyF6-zjgG8TvRhy7Js'
    }
  ]);

}
