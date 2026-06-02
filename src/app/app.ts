import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();

  /** WhatsApp da Carolina (DDI + DDD + número, só dígitos). */
  protected readonly whatsappNumber = '5581989860429';

  protected readonly whatsappMessage = encodeURIComponent(
    'Olá, Carolina! Vi sua página e gostaria de agendar uma consulta.',
  );

  protected get whatsappUrl(): string {
    return `https://wa.me/${this.whatsappNumber}?text=${this.whatsappMessage}`;
  }

  protected readonly instagramHandle = 'carolinaoliveiranutri_';

  protected readonly instagramUrl = `https://www.instagram.com/${this.instagramHandle}/`;

  protected readonly email = 'atendimentocarolinaoliveira@gmail.com';

  protected readonly emailUrl = `mailto:${this.email}`;

  protected readonly specialties = [
    {
      title: 'Emagrecimento',
      description: 'Plano alimentar personalizado com foco em resultados sustentáveis e saudáveis.',
      icon: 'scale',
    },
    {
      title: 'Reeducação alimentar',
      description: 'Mudança de hábitos com equilíbrio — sem terrorismo nutricional.',
      icon: 'leaf',
    },
    {
      title: 'Vitaminas e minerais',
      description: 'Reposição orientada por necessidade real, não por moda.',
      icon: 'pill',
    },
    {
      title: 'Exames bioquímicos',
      description: 'Análise detalhada para repor o que falta e corrigir o que está alterado.',
      icon: 'lab',
    },
  ];
}
