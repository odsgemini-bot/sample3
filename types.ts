
// Added React import to provide access to the React namespace for types like React.ReactNode
import React from 'react';

export interface Skill {
  name: string;
  level: string;
  icon: React.ReactNode;
}

export interface CareerItem {
  period: string;
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  date: string;
}