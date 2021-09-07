import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

    public form: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            email: '',
            password: '',
        });
    }

    public submit() {
        const formData = this.form.getRawValue();

        const data = {
            username: formData.email,
            password: formData.password,
            grant_type: 'password',
            client_id: 2,
            client_secret: 'ZLY5UOVF8pUN7Wn49XS6bFA3L4y2AmmeSLmWI1HX',
            scope: '*',
        };

        const url = 'http://localhost:8000/oauth/token';

        this.http.post(url, data).subscribe(
            result => {
                console.log('Success');
                console.log(result);
            }, error => {
                console.log('Error');
                console.log(error);
            }
        );
    }

}
