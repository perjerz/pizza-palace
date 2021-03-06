import { createAction, props } from '@ngrx/store';
import { OrderItem } from '../order.model';

export const addToOrder = createAction(
    '[Order] Add to order',
    props<{ item: OrderItem }>()
);

export const removeFromOrder = createAction(
    '[Order] Remove from order',
    props<{ item: OrderItem }>()
);

export const checkoutOrder = createAction(
    '[Order] Checkout order'
);

export const checkoutOrderSuccess = createAction(
    '[Order] Checkout order success'
);
