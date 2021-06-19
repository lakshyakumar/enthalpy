export interface CustomCardProps {
  plain?: boolean
  carousel?: any
  center?: boolean
  right?: boolean
  [rest: string]: any
}

export interface CustomCardHeaderProps {
  plain?: boolean
  color?: string
  [rest: string]: any
}

export interface CustomCardBodyProps {
  title?: string
  subtitle?: string
  [rest: string]: any
}

export interface CustomCardFooterProps {
  muted?: boolean
  [rest: string]: any
}

export interface EnthalpyCardStyles {
  cardBody?: string
  cardTitle?: string
  cardSubtitle?: string
  cardFooter?: string
  muted?: string
  cardHeader?: string
  cardHeaderPlain?: string
  warningCardHeader?: string
  successCardHeader?: string
  dangerCardHeader?: string
  infoCardHeader?: string
  primaryCardHeader?: string
  card?: string
  cardPlain?: string
  cardCarousel?: string
  center?: string
  right?: string
}
