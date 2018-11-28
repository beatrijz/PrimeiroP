import {Component} from '@angular/core';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';

@Component({
    templateUrl: './messagesdemo.html'
    })
    export class MessageServiceDemo {

        constructor(private messageService: MessageService) {}

        addSingle() {
            this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
        }

        addMultiple() {
            this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},
                            {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);
        }
        
        clear() {
            this.messageService.clear();
        }
}