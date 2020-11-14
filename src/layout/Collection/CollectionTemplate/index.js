import React from 'react';
import Card from '../../../components/Card/index.js';
import {
	Checkbox,
	CollectionBanner,
	CollectionDescription,
	CollectionTitle,
	Container, FiltersToolbar, Inner,
	GridItem,
	ItemCount,
	Label,
	LeftSidebar, Link, Grid, ProductCount, ProductList, RightSidebar, Select, SidebarTags,
	SidebarWidget, Toolbar, WidgetContent, WidgetItem, WidgetList, WidgetTitle, Image
} from './CollectionTemplateStyles.js';

const CollectionTemplateUI = ({
	collections, sizes, isChecked, prices,
	popularProducts, collection, options, products,
	filter, handleUserFilter
}) => {
	return (
		<Container>
			<Inner>
				<LeftSidebar>
					<SidebarTags>
						<SidebarWidget>
							<WidgetTitle>Collections</WidgetTitle>
							<WidgetContent>
								<WidgetList>
									{
										collections.map(item => (
											<WidgetItem key={item.id}>
												<Link to={`/collections/${item.slug}`}>{item.name}</Link>
											</WidgetItem>
										))
									}
								</WidgetList>
							</WidgetContent>
						</SidebarWidget>
						<SidebarWidget>
							<WidgetTitle>Size</WidgetTitle>
							<WidgetContent>
								<WidgetList>
									{
										sizes.map(size => (
											<WidgetItem key={size.id}>
												<Checkbox
													onChange={isChecked}
													type="checkbox"
													value={size.slug}
												/>
												<Label>{size.name}</Label>
											</WidgetItem>
										))
									}
								</WidgetList>
							</WidgetContent>
						</SidebarWidget>
						<SidebarWidget>
							<WidgetTitle>Price</WidgetTitle>
							<WidgetContent>
								<WidgetList>
									{
										prices.map(price => (
											<WidgetItem key={price.id}>
												<Checkbox
													onChange={isChecked}
													type="checkbox"
													value={price.range}
												/>
												<Label>{price.slug}</Label>
											</WidgetItem>
										))
									}
								</WidgetList>
							</WidgetContent>
						</SidebarWidget>
						<SidebarWidget>
							<WidgetTitle>Popular</WidgetTitle>
							<WidgetContent>
								<WidgetList>
									{
										popularProducts.map(product => (
											<WidgetItem key={product?.id}>
												<Card
													collection={collection}
													{...product}
													url={`/collections/${collection?.slug}/products/${product?.slug}`}
												/>
											</WidgetItem>
										))
									}
								</WidgetList>
							</WidgetContent>
						</SidebarWidget>
					</SidebarTags>
				</LeftSidebar>
				<RightSidebar>
					<CollectionBanner>
						<CollectionTitle>{collection?.name}</CollectionTitle>
					</CollectionBanner>
					<CollectionDescription>
						{collection?.description}
					</CollectionDescription>
					<ProductList>
						<Toolbar>
							<FiltersToolbar>
								<ItemCount>
									<ProductCount>
										Showing: {products?.length || 0} results
									</ProductCount>
								</ItemCount>
								<Select>
									<select
										value={filter}
										onChange={handleUserFilter}
									>
										<option>
											Sort By
										</option>
										{
											options.map(opt => (
												<option
													value={opt?.slug}
													key={opt?.id}
												>
													{opt?.name}
												</option>
											))
										}
									</select>
								</Select>
							</FiltersToolbar>
						</Toolbar>
						<Grid>
							{
								products.map(product => (
									<GridItem>
										<Card
											key={product?.id}
											{...product}
											url={`/collections/${collection?.slug}/products/${product?.slug}`}
										>
										</Card>
									</GridItem>
								))
							}
						</Grid>
					</ProductList>
				</RightSidebar>
			</Inner>
		</Container >
	)
}

export default CollectionTemplateUI