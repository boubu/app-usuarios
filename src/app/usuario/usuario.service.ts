import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosSubject = new BehaviorSubject<any[]>([
    { id: 1, nome: 'Cristiano' },
    { id: 2, nome: 'Lorenzo' },
    { id: 3, nome: 'Genésio' }
  ]);
  
  usuarios$ = this.usuariosSubject.asObservable();

  adicionarUsuario(novoUsuario: string) {
    const usuariosAtuais = this.usuariosSubject.value;
    const novoId = usuariosAtuais.length > 0 ? 
      Math.max(...usuariosAtuais.map(u => u.id)) + 1 : 1;
    
    this.usuariosSubject.next([
      ...usuariosAtuais,
      { id: novoId, nome: novoUsuario }
    ]);
  }

  atualizarUsuario(usuarioAtualizado: any) {
    const usuariosAtuais = this.usuariosSubject.value;
    const index = usuariosAtuais.findIndex(u => u.id === usuarioAtualizado.id);
    
    if (index !== -1) {
      const novosUsuarios = [...usuariosAtuais];
      novosUsuarios[index] = usuarioAtualizado;
      this.usuariosSubject.next(novosUsuarios);
    }
  }

  getUsuarioById(id: number) {
    return this.usuariosSubject.value.find(u => u.id === id);
  }
}