export const sendEmail = async (options) => {
	console.log(options.stepsData[2].data[0].title);
	let stepTwoHTML = `<tr style="border:'1px solid black'
    ;"><th style='border: 1px solid black;padding:5px'>Issue Title</th><th style='border: 1px solid black;padding:5px'>Issue Impact Type</th><tr>`;
	options.stepsData[0].data.map((issue) => {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td style='border: 1px solid black;padding:5px'>${issue.issueTitle}</td><td style='border: 1px solid black;padding:5px'>${issue.issueImpactType[0]}</td>`;
		console.log(tr);
		stepTwoHTML += `<tr style='border:1px solid black;'>${tr.innerHTML}</tr>`;
		return null;
	});

	// let thirdStepHTML=``

	let stepThreeHTML = `<tr style="border:'1px solid black';"><th style='border: 1px solid black;padding:5px'>Feeling</th><th style='border: 1px solid black;padding:5px'>Feeling Reflection</th><tr>`;
	options.stepsData[1].data.map((f) => {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td style='border: 1px solid black;padding:5px'>${f.feelingContent}</td><td style='border: 1px solid black;padding:5px'>${f.feelingReflection}</td>`;
		console.log(tr);
		stepThreeHTML += `<tr style='border:1px solid black;'>${tr.innerHTML}</tr>`;
		return null;
	});

	let stepFourHTML = `<tr style="border:'1px solid black';"><th style='border: 1px solid black;padding:5px'>Title</th><th style='border: 1px solid black;padding:5px'>Status</th><tr>`;
	options.stepsData[2].data.map((tag) => {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td style='border: 1px solid black;padding:5px'>${tag.title}</td><td style='border: 1px solid black;padding:5px'>${tag.status}</td>`;
		console.log(tr);
		stepFourHTML += `<tr style='border:1px solid black;'>${tr.innerHTML}</tr>`;
		return null;
	});

	let stepFiveHTML = `<tr style="border:'1px solid black';"><th style='border: 1px solid black;padding:5px'>Action</th><th style='border: 1px solid black;padding:5px'>Action Date</th><tr>`;
	options.stepsData[3].data.map((act) => {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td style='border: 1px solid black;padding:5px'>${act.actionContent}</td><td style='border: 1px solid black;padding:5px'>${act.actionDate}</td>`;
		console.log(tr);
		stepFiveHTML += `<tr style='border:1px solid black;'>${tr.innerHTML}</tr>`;
		return null;
	});

	let stepSixHTML = `<tr style="border:'1px solid black';"><th style='border: 1px solid black;padding:5px'>Contact Details</th><tr>`;
	options.stepsData[4].data.map((ct) => {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td style='border: 1px solid black;padding:5px'>${ct.contactDetail}</td>`;
		console.log(tr);
		stepSixHTML += `<tr style='border:1px solid black;'>${tr.innerHTML}</tr>`;
		return null;
	});

	let stepSevenHTML = `<tr style="border:'1px solid black';"><th style='border: 1px solid black;padding:5px'>Thought Content</th><th style='border: 1px solid black;padding:5px'>Thought Category</th><tr>`;
	options.stepsData[5].data.map((thg) => {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td style='border: 1px solid black;padding:5px'>${thg.thoughtContent}</td><td style='border: 1px solid black;padding:5px'>${thg.thoughtCategory}</td>`;
		console.log(tr);
		stepSevenHTML += `<tr style='border:1px solid black;'>${tr.innerHTML}</tr>`;
		return null;
	});

	let stepEightHTML = `<tr style="border:'1px solid black';"><th style='border: 1px solid black;padding:5px'>Title</th><th style='border: 1px solid black;padding:5px'>Status</th><tr>`;
	options.stepsData[6].data.map((tag) => {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td style='border: 1px solid black;padding:5px'>${tag.title}</td><td style='border: 1px solid black;padding:5px'>${tag.status}</td>`;
		console.log(tr);
		stepEightHTML += `<tr style='border:1px solid black;'>${tr.innerHTML}</tr>`;
		return null;
	});

	let stepNineHTML = `<tr style="border:'1px solid black';"><th style='border: 1px solid black;padding:5px'>Goal Title</th><th style='border: 1px solid black;padding:5px'>Goal Year</th><tr>`;
	options.stepsData[7].data.map((g) => {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td style='border: 1px solid black;padding:5px'>${g.goalTitle}</td><td style='border: 1px solid black;padding:5px'>${g.goalYear}</td>`;
		console.log(tr);
		stepNineHTML += `<tr style='border:1px solid black;'>${tr.innerHTML}</tr>`;
		return null;
	});

	let stepTenHTML = `<tr style="border:'1px solid black';"><th style='border: 1px solid black;padding:5px'>Title</th><th style='border: 1px solid black;padding:5px'>Category</th> <th style='border: 1px solid black;padding:5px'>Status</th><tr>`;
	options.stepsData[8].data.map((tag) => {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td style='border: 1px solid black;padding:5px'>${tag.tagTitle}</td><td style='border: 1px solid black;padding:5px'>${tag.tagCategory}</td> <td style='border: 1px solid black;padding:5px'>${tag.status}</td>`;
		console.log(tr);
		stepTenHTML += `<tr style='border:1px solid black;'>${tr.innerHTML}</tr>`;
		return null;
	});

	const emailTemplate = `
<table border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout:fixed;background-color:#f9f9f9' id='bodyTable'>
	<tbody>
		<tr>
			<td style='padding-right:10px;padding-left:10px;' align='center' valign='top' id='bodyCell'>
				<table border='0' cellpadding='0' cellspacing='0' width='100%' class='wrapperWebview' style='max-width:600px'>
					<tbody>
						<tr>
							<td align='center' valign='top'>
								<table border='0' cellpadding='0' cellspacing='0' width='100%'>
									<tbody>
										<tr>
											<td style='padding-top: 20px; padding-bottom: 20px; padding-right: 0px;' align='right' valign='middle' class='webview'> <a href='#' style='color:#bbb;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:20px;text-transform:none;text-align:right;text-decoration:underline;padding:0;margin:0' target='_blank' class='text hideOnMobile'>Oh wait, there's more! →</a>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<table border='0' cellpadding='0' cellspacing='0' width='100%' class='wrapperBody' style='max-width:600px'>
					<tbody>
						<tr>
							<td align='center' valign='top'>
								<table border='0' cellpadding='0' cellspacing='0' width='100%' class='tableCard' style='background-color:#fff;border-color:#e5e5e5;border-style:solid;border-width:0 1px 1px 1px;'>
									<tbody>
										<tr>
											<td style='background-color:#00d2f4;font-size:1px;line-height:3px' class='topBorder' height='3'>&nbsp;</td>
										</tr>
										<tr>
											<td style='padding-top: 60px; padding-bottom: 20px;' align='center' valign='middle' class='emailLogo'>
												<a href='#' style='text-decoration:none' target='_blank'>
													<img alt='' border='0' src='https://thetherapytool.com/logo.png' style='width:100%;max-width:150px;height:auto;display:block' width='150'>
												</a>
                                                <p class="subtitle" style="color: rgb(14, 66, 96);">Get More Out Of Therapy ™</p>
											</td>
										</tr>

										<tr>
											<td style='padding-bottom: 5px; padding-left: 20px; padding-right: 20px;' align='center' valign='top' class='mainTitle'>
												<h2 class='text' style='color:#000;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:28px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:36px;text-transform:none;text-align:center;padding:0;margin:0'>Hi '${
													options.fullNameOfUser
												}'</h2>
											</td>
										</tr>
										<tr>
											<td style='padding-bottom: 30px; padding-left: 20px; padding-right: 20px;' align='center' valign='top' class='subTitle'>
												<h4>${options.versionName}</h4>
											</td>
										</tr>
										<tr>
											<td style='padding-left:20px;padding-right:20px' align='center' valign='top' class='containtTable ui-sortable'>
												<table border='0' cellpadding='0' cellspacing='0' width='100%' class='tableDescription' style=''>
													<tbody>
														<tr>
															<td style='padding-bottom: 20px;' align='center' valign='top' class='description'>
																<p class='text' style='color:#666;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:22px;text-transform:none;text-align:center;padding:0;margin:0'>Thanks for subscribe for the Vespro newsletter. Please click confirm button for subscription to start receiving our emails.</p>
															</td>
														</tr>
													</tbody>
												</table>
												<table border='0' cellpadding='0' cellspacing='0' width='100%' class='tableButton' style=''>
													<tbody>
                                                    <tr><td><h3>Step Two</h3></td></tr>
														<tr>
                                                        
															<td style='padding-top:20px;padding-bottom:20px' align='center' valign='top'>
																<table border='0' cellpadding='0' cellspacing='0' align='center'>
                                                              
																	<tbody id='firstStep'>
																		${stepTwoHTML}
                                                                    
																	</tbody>
																</table>
															</td>
														</tr>

                                                        <tr><td><h3>Step Three</h3></td></tr>
                                                        <tr>
                                                        
                                                            <td style='padding-top:20px;padding-bottom:20px' align='center' valign='top'>
                                                                <table border='0' cellpadding='0' cellspacing='0' align='center'>
                                                                
                                                                    <tbody id='firstStep'>
                                                                        ${stepThreeHTML}
                                                                    
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>

                                                        <tr><td><h3>Step Four</h3></td></tr>
                                                        <tr>
                                                
                                                            <td style='padding-top:20px;padding-bottom:20px' align='center' valign='top'>
                                                                <table border='0' cellpadding='0' cellspacing='0' align='center'>
                                                                
                                                                    <tbody id='firstStep'>
                                                                        ${stepFourHTML}
                                                                    
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>


                                                        <tr><td><h3>Step Five</h3></td></tr>
                                                        <tr>
                                                
                                                            <td style='padding-top:20px;padding-bottom:20px' align='center' valign='top'>
                                                                <table border='0' cellpadding='0' cellspacing='0' align='center'>
                                                                
                                                                    <tbody id='firstStep'>
                                                                        ${stepFiveHTML}
                                                                    
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>

                                                        <tr><td><h3>Step Six</h3></td></tr>
                                                        <tr>
                                                
                                                            <td style='padding-top:20px;padding-bottom:20px' align='center' valign='top'>
                                                                <table border='0' cellpadding='0' cellspacing='0' align='center'>
                                                                
                                                                    <tbody id='firstStep'>
                                                                        ${stepSixHTML}
                                                                    
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>


                                                        <tr><td><h3>Step Seven</h3></td></tr>
                                                        <tr>
                                                
                                                            <td style='padding-top:20px;padding-bottom:20px' align='center' valign='top'>
                                                                <table border='0' cellpadding='0' cellspacing='0' align='center'>
                                                                
                                                                    <tbody id='firstStep'>
                                                                        ${stepSevenHTML}
                                                                    
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>


                                                        <tr><td><h3>Step Eight</h3></td></tr>
                                                        <tr>
                                                
                                                            <td style='padding-top:20px;padding-bottom:20px' align='center' valign='top'>
                                                                <table border='0' cellpadding='0' cellspacing='0' align='center'>
                                                                
                                                                    <tbody id='firstStep'>
                                                                        ${stepEightHTML}
                                                                    
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>

                                                        <tr><td><h3>Step Nine</h3></td></tr>
                                                        <tr>
                                                
                                                            <td style='padding-top:20px;padding-bottom:20px' align='center' valign='top'>
                                                                <table border='0' cellpadding='0' cellspacing='0' align='center'>
                                                                
                                                                    <tbody id='firstStep'>
                                                                        ${stepNineHTML}
                                                                    
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>


                                                        <tr><td><h3>Step Ten</h3></td></tr>
                                                        <tr>
                                                
                                                            <td style='padding-top:20px;padding-bottom:20px' align='center' valign='top'>
                                                                <table border='0' cellpadding='0' cellspacing='0' align='center'>
                                                                
                                                                    <tbody id='firstStep'>
                                                                        ${stepTenHTML}
                                                                    
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>


                                                        <tr><td><h3>Step Eleven</h3></td></tr>
                                                        <tr>
                                                
                                                            <td style='padding-top:20px;padding-bottom:20px' align='center' valign='top'>
                                                                <table border='0' cellpadding='0' cellspacing='0' align='center'>
                                                                
                                                                    <tbody id='firstStep'>
                                                                    <h5>Your Score</h4>
                                                                        ${localStorage.getItem(
																																					'step11Points'
																																				)}
                                                                    
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>

                                                        
													</tbody>
												</table>
											</td>
										</tr>
										<tr>
											<td style='font-size:1px;line-height:1px' height='20'>&nbsp;</td>
										</tr>
							
									</tbody>
								</table>
								<table border='0' cellpadding='0' cellspacing='0' width='100%' class='space'>
									<tbody>
										<tr>
											<td style='font-size:1px;line-height:1px' height='30'>&nbsp;</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<table border='0' cellpadding='0' cellspacing='0' width='100%' class='wrapperFooter' style='max-width:600px'>
					<tbody>
						<tr>
							<td align='center' valign='top'>
								<table border='0' cellpadding='0' cellspacing='0' width='100%' class='footer'>
									<tbody>
										<tr>
											<td style='padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px' align='center' valign='top' class='socialLinks'>
												<a href='#facebook-link' style='display:inline-block' target='_blank' class='facebook'>
													<img alt='' border='0' src='http://email.aumfusion.com/vespro/img/social/light/facebook.png' style='height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px' width='40'>
												</a>
												<a href='#twitter-link' style='display: inline-block;' target='_blank' class='twitter'>
													<img alt='' border='0' src='http://email.aumfusion.com/vespro/img/social/light/twitter.png' style='height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px' width='40'>
												</a>
												<a href='#pintrest-link' style='display: inline-block;' target='_blank' class='pintrest'>
													<img alt='' border='0' src='http://email.aumfusion.com/vespro/img/social/light/pintrest.png' style='height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px' width='40'>
												</a>
												<a href='#instagram-link' style='display: inline-block;' target='_blank' class='instagram'>
													<img alt='' border='0' src='http://email.aumfusion.com/vespro/img/social/light/instagram.png' style='height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px' width='40'>
												</a>
												<a href='#linkdin-link' style='display: inline-block;' target='_blank' class='linkdin'>
													<img alt='' border='0' src='http://email.aumfusion.com/vespro/img/social/light/linkdin.png' style='height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px' width='40'>
												</a>
											</td>
										</tr>
										<tr>
											<td style='padding: 10px 10px 5px;' align='center' valign='top' class='brandInfo'>
												<p class='text' style='color:#bbb;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:20px;text-transform:none;text-align:center;padding:0;margin:0'>©&nbsp; My Therapy Tool, 12933 SW 133 Court, Miami, FL 33186, USA.</p>
											</td>
										</tr>
										<tr>
											<td style='padding: 0px 10px 20px;' align='center' valign='top' class='footerLinks'>
												<p class='text' style='color:#bbb;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:20px;text-transform:none;text-align:center;padding:0;margin:0'> <a href='#' style='color:#bbb;text-decoration:underline' target='_blank'>View Web Version </a>&nbsp;|&nbsp; <a href='#' style='color:#bbb;text-decoration:underline' target='_blank'>Email Preferences </a>&nbsp;|&nbsp; <a href='#' style='color:#bbb;text-decoration:underline' target='_blank'>Privacy Policy</a>
												</p>
											</td>
										</tr>
										<tr>
											<td style='padding: 0px 10px 10px;' align='center' valign='top' class='footerEmailInfo'>
												<p class='text' style='color:#bbb;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:20px;text-transform:none;text-align:center;padding:0;margin:0'>If you have any quetions please contact us <a href='#' style='color:#bbb;text-decoration:underline' target='_blank'>support@mail.com.</a>
													<br> <a href='#' style='color:#bbb;text-decoration:underline' target='_blank'>Unsubscribe</a> from our mailing lists</p>
											</td>
										</tr>
										<tr>
											<td style='padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px' align='center' valign='top' class='appLinks'>
												<a href='#Play-Store-Link' style='display: inline-block;' target='_blank' class='play-store'>
													<img alt='' border='0' src='http://email.aumfusion.com/vespro/img/app/play-store.png' style='height:auto;margin:5px;width:100%;max-width:120px' width='120'>
												</a>
												<a href='#App-Store-Link' style='display: inline-block;' target='_blank' class='app-store'>
													<img alt='' border='0' src='http://email.aumfusion.com/vespro/img/app/app-store.png' style='height:auto;margin:5px;width:100%;max-width:120px' width='120'>
												</a>
											</td>
										</tr>
										<tr>
											<td style='font-size:1px;line-height:1px' height='30'>&nbsp;</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td style='font-size:1px;line-height:1px' height='30'>&nbsp;</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>
    `;

	options['message'] = emailTemplate;
	const response = await fetch(process.env.REACT_APP_API_URL + '/email', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token'),
		},
		body: JSON.stringify(options),
	});

	return await response.json();
};
