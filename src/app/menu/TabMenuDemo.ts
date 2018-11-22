import { MenuItem } from "primeng/api";

export class TabMenuDemo {
    
    items: MenuItem[];
    activeItem: MenuItem;


    ngOnInit() {
        this.items = [
            {label: 'Sair', icon: 'fa fa-fw fa-bar-chart'},
            {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
            {label: 'Documentation', icon: 'fa fa-fw fa-book'},
            {label: 'Support', icon: 'fa fa-fw fa-support'},
           
        ];
        this.activeItem = this.items[2];
    }
}
