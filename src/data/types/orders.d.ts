export interface OrdersProps {
    id: string
    trackingCode?: string
    title: string
    status: string
    isReturn?: boolean
    recipientId?: string
    recipientName?: string
    recipientAddress?: string
    recipientZipcode: number
    recipientState?: string
    recipientCity: string
    recipientNeighborhood: string
    deliverymanId?: string
    createdAt: string
    picknUpAt?: string | null
    deliveryAt?: string | null
}
