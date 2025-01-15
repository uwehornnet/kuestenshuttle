import { useEffect, useState } from "react";
import Order from "@react/Order";

const Orders = () => {
	const [orders, setOrders] = useState([]);

	const fetchOrders = async () => {
		setOrders([
			{
				id: 1,
				title: "Binz, Rügen",
				date: "2021-08-01",
				price: 100,
			},
			{
				id: 2,
				title: "Hamburg, Schwerin",
				date: "2021-08-02",
				price: 200,
			},
			{
				id: 3,
				title: "Berlin, Potsdam",
				date: "2021-08-03",
				price: 300,
			},
			{
				id: 1,
				title: "Binz, Rügen",
				date: "2021-08-01",
				price: 100,
			},
			{
				id: 2,
				title: "Hamburg, Schwerin",
				date: "2021-08-02",
				price: 200,
			},
			{
				id: 3,
				title: "Berlin, Potsdam",
				date: "2021-08-03",
				price: 300,
			},
			{
				id: 1,
				title: "Binz, Rügen",
				date: "2021-08-01",
				price: 100,
			},
			{
				id: 2,
				title: "Hamburg, Schwerin",
				date: "2021-08-02",
				price: 200,
			},
			{
				id: 3,
				title: "Berlin, Potsdam",
				date: "2021-08-03",
				price: 300,
			},
		]);
	};

	useEffect(() => {
		fetchOrders();
	}, []);

	return (
		<ul className="order__list">
			{orders.map((order) => (
				<Order key={order.id} {...order} />
			))}
		</ul>
	);
};

export default Orders;
