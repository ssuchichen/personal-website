use axum::http::Method;
use axum::Router;
use axum_server::tls_rustls::RustlsConfig;
use dotenv::dotenv;
use std::env;
use std::net::SocketAddr;
use tower_http::cors::{Any, CorsLayer};
use tower_http::services::{ServeDir, ServeFile};
use tracing_subscriber::filter::LevelFilter;

#[tokio::main]
async fn main() {
    dotenv().ok().unwrap();
    tracing_subscriber::fmt()
        .with_max_level(LevelFilter::INFO)
        .init();

    // ssl
    let cert_file = env::var("SSL_CERT_FILE").expect("CERT_PATH must be set");
    let key_file = env::var("SSL_KEY_FILE").expect("CERT_KEY_PATH must be set");
    let tls_config = RustlsConfig::from_pem_file(cert_file, key_file)
        .await
        .unwrap();

    let cors =
        CorsLayer::new()
            .allow_origin(Any)
            .allow_methods([Method::GET, Method::POST, Method::PUT]);

    let router = Router::new().layer(cors).fallback_service(routes_static());

    let addr = SocketAddr::from(([0, 0, 0, 0], 443));

    axum_server::bind_rustls(addr, tls_config)
        .serve(router.into_make_service())
        .await
        .unwrap();
}

fn routes_static() -> Router {
    Router::new().nest_service(
        "/",
        ServeDir::new("assets").not_found_service(ServeFile::new("assets/index.html")),
    )
}
