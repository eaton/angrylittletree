--- 
layout: post
lj_post: TRUE
title: Who's yo daddy? I's yo daddy.
tags: []

drupal_path: whos-yo-daddy-is-yo-daddy
drupal_nid: 995
created: 1028163840
---
<font size=-1>
<PRE>
SELECT	users.client, line_items.sku, skus.name,
	DATEPART(year, carts.date_placed) AS yearCol,
	DATEPART(month, carts.date_placed) AS monthCol,
	SUM(line_items.total) AS total
FROM	users INNER JOIN
	carts ON users.id = carts.useraccount INNER JOIN
	line_items ON carts.id = line_items.cart INNER JOIN
	skus ON line_items.sku = skus.sku
WHERE	(carts.date_placed IS NOT NULL) AND
	(DATEPART(year, carts.date_placed) = DATEPART(year, GETDATE()) - 1 AND
		DATEPART(month, carts.date_placed) >= DATEPART(month, GETDATE()) OR
	DATEPART(year, carts.date_placed) = DATEPART(year, GETDATE()) AND
		DATEPART(month, carts.date_placed) < DATEPART(month, GETDATE()))
GROUP BY	line_items.sku, DATEPART(month, carts.date_placed), users.client,
	DATEPART(year, carts.date_placed), skus.name
ORDER BY	DATEPART(year, carts.date_placed), DATEPART(month, carts.date_placed)
</PRE>
</font>
