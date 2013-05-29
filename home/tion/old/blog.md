<ul class="breadcrumb">
	<li><a href="/tion">Home</a> <span class="divider">/</span></li>
	<li><a href="blog.md">Blog</a> <span class="divider">/</span></li>
	<li id="blogActive" class="active">Data</li>
</ul>

<div id="blogContent">
</div>

<script>
	$(document).ready(function () {
			
		$("#blogActive").toggle();

		if($.QueryString["post"])
		{
			loadBlogPost("blog/"+$.QueryString["post"]);
		}
		else
		{
		
			$.get("blog/postTemplate.html", function (data) {
				var template = data;

				$.getJSON('blog/summary.json', function (data2) {
					var items = [];

					$.each(data2, function(key, val) {
						var entryText = template
							.replace("{PostTitle}",val.Title)
							.replace(/{PostLink}/g,val.Url)
							.replace("{PostDate}",val.PostDate)
							.replace("{PostAuthor}",val.Author)
							.replace("{PostDescription}",val.Description)
							.replace("{PostImage}",val.Image);
						items.push(entryText);
						$("#blogContent").append(entryText);	
						$("#blogContent a").off("click", clickBlogLink);
						$("#blogContent a").on("click", clickBlogLink);
					});
				});
							
			});
		}	
	
	});

	function clickBlogLink()
	{
		if (/.md$/.test(event.currentTarget.href)) {
			loadBlogPost(event.currentTarget.href);
			return false;
		}
		return true;
	}

	function loadBlogPost(file)	
	{
		$.get(file, function (data) {
			var converter = new Markdown.Converter();
			$("#blogContent").html(converter.makeHtml(data));
			//$("#blogContent a").off("click", clickMarkdownLink);
			$("#blogContent a").on("click", clickMarkdownLink);
		});
		$("#blogActive").toggle();
		$("#blogActive").text(file
			.replace(".md","")
			.replace("http://yourlo.ca/tion/blog/","")
			.replace(/-/g," ") );
	}
	
</script>
</body>
</html>
