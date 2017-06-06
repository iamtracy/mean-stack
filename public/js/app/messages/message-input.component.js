var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
var MessageInputComponent = (function () {
    function MessageInputComponent(messageService) {
        this.messageService = messageService;
    }
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.messageIsEdit.subscribe(function (message) { return _this.message = message; });
    };
    MessageInputComponent.prototype.onSubmit = function (form) {
        if (this.message) {
            this.message.content = form.value.content;
            this.messageService
                .updateMessage(this.message)
                .subscribe(function (result) { return console.log(result); });
            this.message = null;
        }
        else {
            var message = new Message(form.value.content, form.value.username);
            this.messageService
                .addMessage(message)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        }
        form.resetForm();
    };
    MessageInputComponent.prototype.onClear = function (form) {
        this.message = null;
        form.reset();
    };
    return MessageInputComponent;
}());
MessageInputComponent = __decorate([
    Component({
        selector: 'app-message-component',
        templateUrl: './message-input.component.html'
    }),
    __metadata("design:paramtypes", [MessageService])
], MessageInputComponent);
export { MessageInputComponent };
