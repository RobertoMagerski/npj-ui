import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Agendamento } from 'src/app/core/models/agendamento.model';

import * as moment from 'moment-timezone';

@Injectable({
    providedIn: 'root'
  })

export class AgendamentosService{}