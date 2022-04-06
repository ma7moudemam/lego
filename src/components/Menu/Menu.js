import "./Menu.css";
import legoUser from "../../assets/imgs/lego-user.svg";

export default function Menu() {
	return (
		<>
			<div class="menu-bar">
				<header>
					<div>Menu</div>
					<a href="#">
						<i class="fas fa-times"></i>
					</a>
				</header>
				<div class="flex-wrapper">
					<div class="play-zone">
						<a class="left-utility" href="#">
							<i class="fas fa-long-arrow-alt-right"></i>
							play zone
						</a>
					</div>

					<ul class="menu-bar-list">
						<li class="menu-bar-list-item">
							<a href="#">HOME</a>
						</li>
						<li class="menu-bar-list-item">
							<a href="#">SHOP</a>
						</li>
						<li class="menu-bar-list-item">
							<a href="#">DISCOVER</a>
						</li>
						<li class="menu-bar-list-item">
							<a href="#">HELP</a>
						</li>
						<li class="menu-bar-list-item">
							<a href="#" class="user-icon">
								<img src={legoUser} class="svg" />
								Account
							</a>
						</li>
						<li class="menu-bar-list-item">
							<a href="#" class="vip-icon">
								<i class="fas fa-crown"></i>
								VIP
							</a>
						</li>
						<li class="menu-bar-list-item">
							<a href="#">My Wishlist</a>
						</li>
						<li class="menu-bar-list-item">
							<a href="#">
								My Bag <span>(0)</span>
							</a>
						</li>
						<li class="menu-bar-list-item">
							<a href="#" class="region-icon">
								<i class="fas fa-map-marker-alt"></i> Region
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
