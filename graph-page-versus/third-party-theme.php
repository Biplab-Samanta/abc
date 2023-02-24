<?php
/**
 * Template Name: Third Party Themes
 * A full-width template.
 *
 * @package Avada
 * @subpackage Templates
 */

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'Direct script access denied.' );
}

get_header();

$args = array(
	'posts_per_page'   => -1,
	'orderby'          => 'title',
	'order'            => 'ASC',
	'post_type'        => 'themes',
	'post_status'      => 'publish',
);
$themes = get_posts( $args );
if ( is_home() || is_front_page() || is_checkout() || is_page(MULTIVENDORX_NO_PAGE_TITLE)) {
  $navbar_class .= ' curve-bg-area';
}
?>
<div class="<?php echo $navbar_class; ?> Markectplace-page position-relative">
	<div class="container p-0">
		<div class="container pb-5">
	    <div class="row">
				<?php the_title( '<h1 class="entry-title text-center page-heading font-white">', '</h1>' ); ?>
			</div>
		</div>
	</div>
</div>
<main id="site-content" class="container-fluid">
<div id="content" class="container pt-0">
	<div class='row'>
			<div class='col-lg-10 mx-auto text-center'>
		
		<?php if ( !empty( get_the_content() ) ) { ?>
		<div class="themes-message"><?php echo get_the_content(); ?></div>	
	<?php } ?>
	</div>
	</div>
	
	<!-- Contributtor cullumn start -->
	<div class="themes-wrap">
		<?php if( !empty( $themes ) ) {
			foreach( $themes as $theme ) { 
				$theme_id = $theme->ID;
				$image_url = get_the_post_thumbnail_url( $theme_id );
				$title = get_the_title( $theme_id );
				$theme_author_name = get_post_meta( $theme_id, 'theme_author_name', true );
        $theme_email_id = get_post_meta( $theme_id, 'theme_email_id', true );
        $theme_support_forum_link = get_post_meta( $theme_id, 'theme_support_forum_link', true );
        $theme_purchase_link = get_post_meta( $theme_id, 'theme_purchase_link', true );
        $theme_demo_link = get_post_meta( $theme_id, 'theme_demo_link', true );
				?>

				<div class="theme-card theme-featured" id="<?php print (str_replace(' ', '-', strtolower($title))); ?>">
					<?php if( !empty( $image_url ) ) { ?>
						<div class="theme-image-wrap">
							<img src="<?php echo $image_url; ?>" class="lazyloaded">
						</div>
					<?php } ?>
					<div class="theme-overlay">
						<?php
						if( !empty( $theme_purchase_link ) ) { ?>
							<div class="theme-download">
								<a href="<?php echo $theme_purchase_link; ?>" target="_blank" rel="nofollow">Download</a>
							</div>
						<?php } else {
							echo "<div class='theme-download'></div>";
						}

						 if( !empty( $theme_support_forum_link ) ) { ?>
							<div class="theme-support-forum">
								<a href="<?php echo $theme_support_forum_link; ?>" target="_blank" rel="nofollow">Get Help</a>
							</div>
						<?php } else {
							echo "<div class='theme-support-forum'></div>";
						}
						?>
					</div>
					<div class="theme-desc">
						<div class="theme-info">
						<?php if( !empty( $title ) ) { ?>
							<span class="theme-name"><?php echo $title; ?></span>
						<?php }
						if( !empty( $theme_author_name ) ) { ?>
							<span class="theme-author-name">by <?php echo $theme_author_name; ?></span>
						<?php } ?>
						</div>
						<?php
						$themes_domain = get_the_terms($theme_id, 'themes_domain');
						$themes_domain_list ='';
						foreach($themes_domain as $themes_domain_single) {
							$themes_domain_list .= $themes_domain_single->name.', ';
						}
						$themes_domain_list = rtrim($themes_domain_list, ', ');
						echo '<div class="theme-domain-demo">';
						if( !empty( $themes_domain_list ) ) echo "<div class='theme-domain-list'>" . $themes_domain_list . "</div>";
						if( !empty( $theme_demo_link ) ) { ?>
							<div class="theme-demo">
								<a href="<?php echo $theme_demo_link; ?>" target="_blank" rel="nofollow">Demo</a>
							</div>
						<?php } else {
							echo "<div class='theme-demo'></div>";
						}
						echo "</div>";
						if( !empty( $theme->post_content ) ) { ?>
							<div class="theme-content">
								<?php echo $theme->post_content; ?>
							</div>
						<?php } ?>
					</div>
				</div>
			<?php }
		} ?>
	</div>
	<!-- Theme column End -->
</div>
</main>
<?php get_footer();
