package com.example.webviewapp;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private WebView myWebView;
    private EditText searchBar;
    private Button searchButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Initialize WebView
        myWebView = findViewById(R.id.webView);
        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);

        // Prevent opening in an external browser
        myWebView.setWebViewClient(new WebViewClient());

        // Initialize search bar and button
        searchBar = findViewById(R.id.search_bar);
        searchButton = findViewById(R.id.search_button);

        // Set up search button click listener
        searchButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Get the user's search query
                String searchQuery = searchBar.getText().toString();

                // Create the URL for the search result page
                String searchUrl = "https://rj236129.github.io/" + searchQuery;

                // Load the search results in the WebView
                myWebView.loadUrl(searchUrl);
            }
        });
    }

    @Override
    public void onBackPressed() {
        if (myWebView.canGoBack()) {
            myWebView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
