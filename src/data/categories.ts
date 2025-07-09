
export interface Category {
  value: string;
  label: string;
}

export const categories: Category[] = [
  { value: 'todos', label: 'Todos los cursos' },
  { value: 'ia', label: 'Inteligencia Artificial' },
  { value: 'xr', label: 'Realidad Extendida' },
  { value: '3d', label: 'Diseño 3D' },
  { value: 'vr', label: 'Realidad Virtual' },
  { value: 'diseno', label: 'Diseño Digital' }
];
