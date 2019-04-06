import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";

@NgModule({
	imports: [HttpModule],
	providers: [
		ProductRepository, Cart, Order, OrderRepository, RestDataSource, AuthService
		{ provide: StaticDataSource, useClass: RestDataSource }
	]
})
export class ModelModule {}
