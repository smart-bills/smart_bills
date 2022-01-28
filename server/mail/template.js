function dish_message(store, dishes, amount) {
	return `<html
	lang="en"
	xmlns:o="urn:schemas-microsoft-com:office:office"
	xmlns:v="urn:schemas-microsoft-com:vml"
>
	<head>
		<title></title>
		<meta charset="utf-8" />
		<meta content="width=device-width, initial-scale=1.0" name="viewport" />
		<!--[if mso
			]><xml
				><o:OfficeDocumentSettings
					><o:PixelsPerInch>96</o:PixelsPerInch
					><o:AllowPNG /></o:OfficeDocumentSettings></xml
		><![endif]-->
		<style>
			* {
				box-sizing: border-box;
			}

			body {
				margin: 0;
				padding: 0;
			}

			a[x-apple-data-detectors] {
				color: inherit !important;
				text-decoration: inherit !important;
			}

			#MessageViewBody a {
				color: inherit;
				text-decoration: none;
			}

			p {
				line-height: inherit;
			}

			@media (max-width: 820px) {
				.icons-inner {
					text-align: center;
				}

				.icons-inner td {
					margin: 0 auto;
				}

				.row-content {
					width: 100% !important;
				}

				.stack .column {
					width: 100%;
					display: block;
				}
			}
		</style>
	</head>
	<body
		style="
			background-color: #f2f2f2;
			margin: 0;
			padding: 0;
			-webkit-text-size-adjust: none;
			text-size-adjust: none;
		"
	>
		<table
			border="0"
			cellpadding="0"
			cellspacing="0"
			class="nl-container"
			role="presentation"
			style="
				mso-table-lspace: 0pt;
				mso-table-rspace: 0pt;
				background-color: #f2f2f2;
			"
			width="100%"
		>
			<tbody>
				<tr>
					<td>
						<table
							align="center"
							border="0"
							cellpadding="0"
							cellspacing="0"
							class="row row-1"
							role="presentation"
							style="
								mso-table-lspace: 0pt;
								mso-table-rspace: 0pt;
								background-color: #fffafa;
							"
							width="100%"
						>
							<tbody>
								<tr>
									<td>
										<table
											align="center"
											border="0"
											cellpadding="0"
											cellspacing="0"
											class="row-content stack"
											role="presentation"
											style="
												mso-table-lspace: 0pt;
												mso-table-rspace: 0pt;
												color: #000000;
												width: 800px;
											"
											width="800"
										>
											<tbody>
												<tr>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															padding-top: 5px;
															padding-bottom: 5px;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="100%"
													>
														<div
															class="spacer_block"
															style="
																height: 60px;
																line-height: 60px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table
							align="center"
							border="0"
							cellpadding="0"
							cellspacing="0"
							class="row row-2"
							role="presentation"
							style="
								mso-table-lspace: 0pt;
								mso-table-rspace: 0pt;
								background-color: #fffafa;
							"
							width="100%"
						>
							<tbody>
								<tr>
									<td>
										<table
											align="center"
											border="0"
											cellpadding="0"
											cellspacing="0"
											class="row-content stack"
											role="presentation"
											style="
												mso-table-lspace: 0pt;
												mso-table-rspace: 0pt;
												background-color: #1976d2;
												color: #000000;
												width: 800px;
											"
											width="800"
										>
											<tbody>
												<tr>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="20%"
													>
														<div
															class="spacer_block"
															style="
																height: 70px;
																line-height: 5px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="60%"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															class="heading_block"
															role="presentation"
															style="
																mso-table-lspace: 0pt;
																mso-table-rspace: 0pt;
															"
															width="100%"
														>
															<tr>
																<td
																	style="
																		width: 100%;
																		text-align: center;
																		padding-top: 5px;
																		padding-bottom: 5px;
																	"
																>
																	<h1
																		style="
																			margin: 0;
																			color: #ffffff;
																			font-size: 26px;
																			font-family: sans-serif;
																			line-height: 120%;
																			text-align: center;
																			direction: ltr;
																			font-weight: normal;
																			letter-spacing: normal;
																			margin-top: 15px;
																			margin-bottom: 0;
																		"
																	>
																		Greetings, Here is your Smart Bill
																	</h1>
																</td>
															</tr>
														</table>
													</td>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="33.333333333333336%"
													>
														<div
															class="spacer_block"
															style="
																height: 70px;
																line-height: 5px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table
							align="center"
							border="0"
							cellpadding="0"
							cellspacing="0"
							class="row row-3"
							role="presentation"
							style="
								mso-table-lspace: 0pt;
								mso-table-rspace: 0pt;
								background-color: #fffafa;
							"
							width="100%"
						>
							<tbody>
								<tr>
									<td>
										<table
											align="center"
											border="0"
											cellpadding="0"
											cellspacing="0"
											class="row-content stack"
											role="presentation"
											style="
												mso-table-lspace: 0pt;
												mso-table-rspace: 0pt;
												background-color: #e2f2fd;
												color: #000000;
												width: 800px;
											"
											width="800"
										>
											<tbody>
												<tr>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="33.333333333333336%"
													>
														<div
															class="spacer_block"
															style="
																height: 70px;
																line-height: 5px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="33.333333333333336%"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															class="text_block"
															role="presentation"
															style="
																mso-table-lspace: 0pt;
																mso-table-rspace: 0pt;
																word-break: break-word;
															"
															width="100%"
														>
															<tr>
																<td
																	style="
																		padding-top: 15px;
																		padding-right: 10px;
																		padding-bottom: 15px;
																		padding-left: 10px;
																	"
																>
																	<div style="font-family: sans-serif">
																		<div
																			style="
																				font-size: 16px;
																				font-family: sans-serif;
																				mso-line-height-alt: 16.8px;
																				color: #4b4b4b;
																				line-height: 1.2;
																			"
																		>
																			<p style="margin: 0; text-align: center">
																				You ordered ${dishes} at ${store}.
																			</p>
																			<p style="margin: 0; text-align: center">
																				Your total is ${amount}
																			</p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
													</td>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="33.333333333333336%"
													>
														<div
															class="spacer_block"
															style="
																height: 70px;
																line-height: 5px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table
							align="center"
							border="0"
							cellpadding="0"
							cellspacing="0"
							class="row row-4"
							role="presentation"
							style="
								mso-table-lspace: 0pt;
								mso-table-rspace: 0pt;
								background-color: #f9f9f9;
							"
							width="100%"
						>
							<tbody>
								<tr>
									<td>
										<table
											align="center"
											border="0"
											cellpadding="0"
											cellspacing="0"
											class="row-content stack"
											role="presentation"
											style="
												mso-table-lspace: 0pt;
												mso-table-rspace: 0pt;
												background-color: #e2f2fd;
												color: #000000;
												width: 800px;
											"
											width="800"
										>
											<tbody>
												<tr>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="25%"
													>
														<div
															class="spacer_block"
															style="
																height: 70px;
																line-height: 5px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="50%"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															class="image_block"
															role="presentation"
															style="
																mso-table-lspace: 0pt;
																mso-table-rspace: 0pt;
															"
															width="100%"
														>
															<tr>
																<td
																	style="
																		width: 100%;
																		padding-right: 0px;
																		padding-left: 0px;
																		padding-top: 5px;
																		padding-bottom: 5px;
																	"
																>
																	<div align="center" style="line-height: 10px">
																		<img
																			src="https://i.ibb.co/kx19V8q/home.png"
																			style="
																				display: block;
																				height: auto;
																				border: 0;
																				width: 400px;
																				max-width: 100%;
																			"
																			width="400"
																		/>
																	</div>
																</td>
															</tr>
														</table>
													</td>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="25%"
													>
														<div
															class="spacer_block"
															style="
																height: 70px;
																line-height: 5px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table
							align="center"
							border="0"
							cellpadding="0"
							cellspacing="0"
							class="row row-5"
							role="presentation"
							style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
							width="100%"
						>
							<tbody>
								<tr>
									<td>
										<table
											align="center"
											border="0"
											cellpadding="0"
											cellspacing="0"
											class="row-content stack"
											role="presentation"
											style="
												mso-table-lspace: 0pt;
												mso-table-rspace: 0pt;
												color: #000000;
												width: 800px;
											"
											width="800"
										>
											<tbody>
												<tr>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															padding-top: 5px;
															padding-bottom: 5px;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="100%"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															class="icons_block"
															role="presentation"
															style="
																mso-table-lspace: 0pt;
																mso-table-rspace: 0pt;
															"
															width="100%"
														>
															<tr>
																<td
																	style="
																		color: #9d9d9d;
																		font-family: inherit;
																		font-size: 15px;
																		padding-bottom: 5px;
																		padding-top: 5px;
																		text-align: center;
																	"
																>
																	<table
																		cellpadding="0"
																		cellspacing="0"
																		role="presentation"
																		style="
																			mso-table-lspace: 0pt;
																			mso-table-rspace: 0pt;
																		"
																		width="100%"
																	>
																		<tr>
																			<td style="text-align: center">
																				<!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																				<!--[if !vml]><!-->
																				<table
																					cellpadding="0"
																					cellspacing="0"
																					class="icons-inner"
																					role="presentation"
																					style="
																						mso-table-lspace: 0pt;
																						mso-table-rspace: 0pt;
																						display: inline-block;
																						margin-right: -4px;
																						padding-left: 0px;
																						padding-right: 0px;
																						padding-bottom: 5px;
																					"
																				></table>
																			</td>
																		</tr>
																	</table>
																</td>
															</tr>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
		<!-- End -->
	</body>
</html>`;
}

function bill_message(store, amount) {
	return `<html
	lang="en"
	xmlns:o="urn:schemas-microsoft-com:office:office"
	xmlns:v="urn:schemas-microsoft-com:vml"
>
	<head>
		<title></title>
		<meta charset="utf-8" />
		<meta content="width=device-width, initial-scale=1.0" name="viewport" />
		<!--[if mso
			]><xml
				><o:OfficeDocumentSettings
					><o:PixelsPerInch>96</o:PixelsPerInch
					><o:AllowPNG /></o:OfficeDocumentSettings></xml
		><![endif]-->
		<style>
			* {
				box-sizing: border-box;
			}

			body {
				margin: 0;
				padding: 0;
			}

			a[x-apple-data-detectors] {
				color: inherit !important;
				text-decoration: inherit !important;
			}

			#MessageViewBody a {
				color: inherit;
				text-decoration: none;
			}

			p {
				line-height: inherit;
			}

			@media (max-width: 820px) {
				.icons-inner {
					text-align: center;
				}

				.icons-inner td {
					margin: 0 auto;
				}

				.row-content {
					width: 100% !important;
				}

				.stack .column {
					width: 100%;
					display: block;
				}
			}
		</style>
	</head>
	<body
		style="
			background-color: #f2f2f2;
			margin: 0;
			padding: 0;
			-webkit-text-size-adjust: none;
			text-size-adjust: none;
		"
	>
		<table
			border="0"
			cellpadding="0"
			cellspacing="0"
			class="nl-container"
			role="presentation"
			style="
				mso-table-lspace: 0pt;
				mso-table-rspace: 0pt;
				background-color: #f2f2f2;
			"
			width="100%"
		>
			<tbody>
				<tr>
					<td>
						<table
							align="center"
							border="0"
							cellpadding="0"
							cellspacing="0"
							class="row row-1"
							role="presentation"
							style="
								mso-table-lspace: 0pt;
								mso-table-rspace: 0pt;
								background-color: #fffafa;
							"
							width="100%"
						>
							<tbody>
								<tr>
									<td>
										<table
											align="center"
											border="0"
											cellpadding="0"
											cellspacing="0"
											class="row-content stack"
											role="presentation"
											style="
												mso-table-lspace: 0pt;
												mso-table-rspace: 0pt;
												color: #000000;
												width: 800px;
											"
											width="800"
										>
											<tbody>
												<tr>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															padding-top: 5px;
															padding-bottom: 5px;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="100%"
													>
														<div
															class="spacer_block"
															style="
																height: 60px;
																line-height: 60px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table
							align="center"
							border="0"
							cellpadding="0"
							cellspacing="0"
							class="row row-2"
							role="presentation"
							style="
								mso-table-lspace: 0pt;
								mso-table-rspace: 0pt;
								background-color: #fffafa;
							"
							width="100%"
						>
							<tbody>
								<tr>
									<td>
										<table
											align="center"
											border="0"
											cellpadding="0"
											cellspacing="0"
											class="row-content stack"
											role="presentation"
											style="
												mso-table-lspace: 0pt;
												mso-table-rspace: 0pt;
												background-color: #1976d2;
												color: #000000;
												width: 800px;
											"
											width="800"
										>
											<tbody>
												<tr>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="20%"
													>
														<div
															class="spacer_block"
															style="
																height: 70px;
																line-height: 5px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="60%"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															class="heading_block"
															role="presentation"
															style="
																mso-table-lspace: 0pt;
																mso-table-rspace: 0pt;
															"
															width="100%"
														>
															<tr>
																<td
																	style="
																		width: 100%;
																		text-align: center;
																		padding-top: 5px;
																		padding-bottom: 5px;
																	"
																>
																	<h1
																		style="
																			margin: 0;
																			color: #ffffff;
																			font-size: 26px;
																			font-family: sans-serif;
																			line-height: 120%;
																			text-align: center;
																			direction: ltr;
																			font-weight: normal;
																			letter-spacing: normal;
																			margin-top: 15px;
																			margin-bottom: 0;
																		"
																	>
																		Greetings, Here is your Smart Bill
																	</h1>
																</td>
															</tr>
														</table>
													</td>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="33.333333333333336%"
													>
														<div
															class="spacer_block"
															style="
																height: 70px;
																line-height: 5px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table
							align="center"
							border="0"
							cellpadding="0"
							cellspacing="0"
							class="row row-3"
							role="presentation"
							style="
								mso-table-lspace: 0pt;
								mso-table-rspace: 0pt;
								background-color: #fffafa;
							"
							width="100%"
						>
							<tbody>
								<tr>
									<td>
										<table
											align="center"
											border="0"
											cellpadding="0"
											cellspacing="0"
											class="row-content stack"
											role="presentation"
											style="
												mso-table-lspace: 0pt;
												mso-table-rspace: 0pt;
												background-color: #e2f2fd;
												color: #000000;
												width: 800px;
											"
											width="800"
										>
											<tbody>
												<tr>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="33.333333333333336%"
													>
														<div
															class="spacer_block"
															style="
																height: 70px;
																line-height: 5px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="33.333333333333336%"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															class="text_block"
															role="presentation"
															style="
																mso-table-lspace: 0pt;
																mso-table-rspace: 0pt;
																word-break: break-word;
															"
															width="100%"
														>
															<tr>
																<td
																	style="
																		padding-top: 15px;
																		padding-right: 10px;
																		padding-bottom: 15px;
																		padding-left: 10px;
																	"
																>
																	<div style="font-family: sans-serif">
																		<div
																			style="
																				font-size: 16px;
																				font-family: sans-serif;
																				mso-line-height-alt: 16.8px;
																				color: #4b4b4b;
																				line-height: 1.2;
																			"
																		>
																			<p style="margin: 0; text-align: center">
																				You ordered at this ${store}.
																			</p>
																			<p style="margin: 0; text-align: center">
																				Your total is ${amount}
																			</p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
													</td>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="33.333333333333336%"
													>
														<div
															class="spacer_block"
															style="
																height: 70px;
																line-height: 5px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table
							align="center"
							border="0"
							cellpadding="0"
							cellspacing="0"
							class="row row-4"
							role="presentation"
							style="
								mso-table-lspace: 0pt;
								mso-table-rspace: 0pt;
								background-color: #f9f9f9;
							"
							width="100%"
						>
							<tbody>
								<tr>
									<td>
										<table
											align="center"
											border="0"
											cellpadding="0"
											cellspacing="0"
											class="row-content stack"
											role="presentation"
											style="
												mso-table-lspace: 0pt;
												mso-table-rspace: 0pt;
												background-color: #e2f2fd;
												color: #000000;
												width: 800px;
											"
											width="800"
										>
											<tbody>
												<tr>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="25%"
													>
														<div
															class="spacer_block"
															style="
																height: 70px;
																line-height: 5px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="50%"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															class="image_block"
															role="presentation"
															style="
																mso-table-lspace: 0pt;
																mso-table-rspace: 0pt;
															"
															width="100%"
														>
															<tr>
																<td
																	style="
																		width: 100%;
																		padding-right: 0px;
																		padding-left: 0px;
																		padding-top: 5px;
																		padding-bottom: 5px;
																	"
																>
																	<div align="center" style="line-height: 10px">
																		<img
																			src="https://i.ibb.co/kx19V8q/home.png"
																			style="
																				display: block;
																				height: auto;
																				border: 0;
																				width: 400px;
																				max-width: 100%;
																			"
																			width="400"
																		/>
																	</div>
																</td>
															</tr>
														</table>
													</td>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="25%"
													>
														<div
															class="spacer_block"
															style="
																height: 70px;
																line-height: 5px;
																font-size: 1px;
															"
														>
															 
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table
							align="center"
							border="0"
							cellpadding="0"
							cellspacing="0"
							class="row row-5"
							role="presentation"
							style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
							width="100%"
						>
							<tbody>
								<tr>
									<td>
										<table
											align="center"
											border="0"
											cellpadding="0"
											cellspacing="0"
											class="row-content stack"
											role="presentation"
											style="
												mso-table-lspace: 0pt;
												mso-table-rspace: 0pt;
												color: #000000;
												width: 800px;
											"
											width="800"
										>
											<tbody>
												<tr>
													<td
														class="column"
														style="
															mso-table-lspace: 0pt;
															mso-table-rspace: 0pt;
															font-weight: 400;
															text-align: left;
															vertical-align: top;
															padding-top: 5px;
															padding-bottom: 5px;
															border-top: 0px;
															border-right: 0px;
															border-bottom: 0px;
															border-left: 0px;
														"
														width="100%"
													>
														<table
															border="0"
															cellpadding="0"
															cellspacing="0"
															class="icons_block"
															role="presentation"
															style="
																mso-table-lspace: 0pt;
																mso-table-rspace: 0pt;
															"
															width="100%"
														>
															<tr>
																<td
																	style="
																		color: #9d9d9d;
																		font-family: inherit;
																		font-size: 15px;
																		padding-bottom: 5px;
																		padding-top: 5px;
																		text-align: center;
																	"
																>
																	<table
																		cellpadding="0"
																		cellspacing="0"
																		role="presentation"
																		style="
																			mso-table-lspace: 0pt;
																			mso-table-rspace: 0pt;
																		"
																		width="100%"
																	>
																		<tr>
																			<td style="text-align: center">
																				<!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																				<!--[if !vml]><!-->
																				<table
																					cellpadding="0"
																					cellspacing="0"
																					class="icons-inner"
																					role="presentation"
																					style="
																						mso-table-lspace: 0pt;
																						mso-table-rspace: 0pt;
																						display: inline-block;
																						margin-right: -4px;
																						padding-left: 0px;
																						padding-right: 0px;
																						padding-bottom: 5px;
																					"
																				></table>
																			</td>
																		</tr>
																	</table>
																</td>
															</tr>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
		<!-- End -->
	</body>
</html>`;
}

module.exports = { dish_message, bill_message };
